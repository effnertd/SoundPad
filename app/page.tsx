"use client"
import { SoundPadGrid } from "@/components/sound-pad-grid"
import type React from "react"

import { AudioProvider, useAudio } from "@/components/audio-provider"
import { Button } from "@/components/ui/button"
import { Download, Upload } from "lucide-react"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

function ExportImportButtons() {
  const { exportData, importData } = useAudio()
  const [isExporting, setIsExporting] = useState(false)
  const [isImporting, setIsImporting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleExport = async () => {
    setIsExporting(true)
    try {
      await exportData()
      setTimeout(() => setIsExporting(false), 1000)
    } catch (error) {
      console.error("Export failed:", error)
      setIsExporting(false)
    }
  }

  const handleImportClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsImporting(true)
    try {
      await importData(file)
      setTimeout(() => setIsImporting(false), 1000)
    } catch (error) {
      console.error("Import failed:", error)
      alert("Failed to import data. Please make sure you selected a valid sound pad mixer export file.")
      setIsImporting(false)
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="flex gap-2">
      <input ref={fileInputRef} type="file" accept=".zip" onChange={handleFileChange} className="hidden" />
      <Button
        onClick={handleImportClick}
        variant="outline"
        size="sm"
        className={cn(
          "flex items-center gap-2 transition-colors duration-300",
          isImporting ? "bg-green-100 border-green-300 text-green-700" : "bg-transparent",
        )}
        disabled={isImporting}
      >
        <Upload className="w-4 h-4" />
        {isImporting ? "Imported!" : "Import"}
      </Button>
      <Button
        onClick={handleExport}
        variant="outline"
        size="sm"
        className={cn(
          "flex items-center gap-2 transition-colors duration-300",
          isExporting ? "bg-green-100 border-green-300 text-green-700" : "bg-transparent",
        )}
        disabled={isExporting}
      >
        <Download className="w-4 h-4" />
        {isExporting ? "Exported!" : "Export"}
      </Button>
    </div>
  )
}

export default function Home() {
  return (
    <AudioProvider>
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1" />
              <div className="flex-1 text-center">
                <h1 className="text-3xl font-bold text-foreground mb-2">Sound Pad Mixer</h1>
                <p className="text-muted-foreground">Professional audio mixing interface</p>
              </div>
              <div className="flex-1 flex justify-end">
                <ExportImportButtons />
              </div>
            </div>
          </header>
          <SoundPadGrid />
        </div>
      </div>
    </AudioProvider>
  )
}
