// This script will be executed once to set up the meditation pad configuration

interface PadConfig {
  name: string
  color: string
  volume: number // 0-2 range (0.7 = 70%, 0.8 = 80%)
  balance: number // -1 to 1 range (-0.5 = -50, +0.5 = +50)
  echoDelay: number // in seconds (0.2 = 200ms)
  echoFeedback: number // 0-1 range (0.1 = 10%, 0.2 = 20%)
}

// Define the meditation pad configurations for the top 4 rows (24 pads)
const meditationPads: Record<string, PadConfig> = {
  // Row 1 - Blue
  "1": {
    name: "Focus Point",
    color: "blue",
    volume: 0.8,
    balance: -0.3,
    echoDelay: 0.2,
    echoFeedback: 0.1,
  },
  "2": {
    name: "Deep Breath",
    color: "blue",
    volume: 0.8,
    balance: 0.3,
    echoDelay: 0,
    echoFeedback: 0,
  },
  "3": {
    name: "Body Weight",
    color: "blue",
    volume: 0.8,
    balance: -0.4,
    echoDelay: 0.3,
    echoFeedback: 0.15,
  },
  "4": {
    name: "Wave of Calm",
    color: "blue",
    volume: 0.8,
    balance: 0.4,
    echoDelay: 0,
    echoFeedback: 0,
  },
  "5": {
    name: "Clarity Emerges",
    color: "blue",
    volume: 0.8,
    balance: -0.2,
    echoDelay: 0.4,
    echoFeedback: 0.2,
  },
  "6": {
    name: "Close Eyes",
    color: "blue",
    volume: 0.8,
    balance: 0.2,
    echoDelay: 0,
    echoFeedback: 0,
  },

  // Row 2 - Green
  "7": {
    name: "Sit Comfortably",
    color: "green",
    volume: 0.8,
    balance: -0.2,
    echoDelay: 0.1,
    echoFeedback: 0.05,
  },
  "8": {
    name: "Match Rhythm",
    color: "green",
    volume: 0.8,
    balance: 0.2,
    echoDelay: 0,
    echoFeedback: 0,
  },
  "9": {
    name: "Posture Relaxing",
    color: "green",
    volume: 0.8,
    balance: -0.3,
    echoDelay: 0.2,
    echoFeedback: 0.1,
  },
  "10": {
    name: "Voice Sync",
    color: "green",
    volume: 0.8,
    balance: 0.3,
    echoDelay: 0,
    echoFeedback: 0,
  },
  "11": {
    name: "Trust Building",
    color: "green",
    volume: 0.8,
    balance: -0.2,
    echoDelay: 0.1,
    echoFeedback: 0.05,
  },
  "12": {
    name: "Breath Slows",
    color: "green",
    volume: 0.8,
    balance: 0.2,
    echoDelay: 0,
    echoFeedback: 0,
  },

  // Row 3 - Yellow (using "amber" for yellow)
  "13": {
    name: "Drift Deeper",
    color: "amber",
    volume: 0.8,
    balance: -0.4,
    echoDelay: 0,
    echoFeedback: 0,
  },
  "14": {
    name: "Into Relaxation",
    color: "amber",
    volume: 0.8,
    balance: 0.4,
    echoDelay: 0.3,
    echoFeedback: 0.15,
  },
  "15": {
    name: "Eyelids Closing",
    color: "amber",
    volume: 0.8,
    balance: -0.5,
    echoDelay: 0,
    echoFeedback: 0,
  },
  "16": {
    name: "Inner Calm",
    color: "amber",
    volume: 0.8,
    balance: 0.5,
    echoDelay: 0.2,
    echoFeedback: 0.1,
  },
  "17": {
    name: "Peaceful State",
    color: "amber",
    volume: 0.8,
    balance: -0.3,
    echoDelay: 0,
    echoFeedback: 0,
  },
  "18": {
    name: "Effortless Change",
    color: "amber",
    volume: 0.8,
    balance: 0.3,
    echoDelay: 0.4,
    echoFeedback: 0.2,
  },

  // Row 4 - Grey (using "slate" for grey)
  "19": {
    name: "Descending Stairs",
    color: "slate",
    volume: 0.7,
    balance: -0.5,
    echoDelay: 0.4,
    echoFeedback: 0.2,
  },
  "20": {
    name: "Count Down",
    color: "slate",
    volume: 0.7,
    balance: 0.5,
    echoDelay: 0.3,
    echoFeedback: 0.15,
  },
  "21": {
    name: "Trance Deepening",
    color: "slate",
    volume: 0.7,
    balance: -0.4,
    echoDelay: 0.5,
    echoFeedback: 0.2,
  },
  "22": {
    name: "Going Deeper",
    color: "slate",
    volume: 0.7,
    balance: 0.4,
    echoDelay: 0,
    echoFeedback: 0,
  },
  "23": {
    name: "Sinking Further",
    color: "slate",
    volume: 0.7,
    balance: -0.3,
    echoDelay: 0.4,
    echoFeedback: 0.2,
  },
  "24": {
    name: "Elevator Drop",
    color: "slate",
    volume: 0.7,
    balance: 0.3,
    echoDelay: 0.3,
    echoFeedback: 0.15,
  },

  // Row 5 - Pink
  "25": {
    name: "Arm Heavy",
    color: "rose",
    volume: 0.8,
    balance: -0.4,
    echoDelay: 0,
    echoFeedback: 0,
  },
  "26": {
    name: "Story of Calm",
    color: "rose",
    volume: 0.8,
    balance: 0.4,
    echoDelay: 0.2,
    echoFeedback: 0.1,
  },
  "27": {
    name: "Confidence Rising",
    color: "rose",
    volume: 0.8,
    balance: -0.5,
    echoDelay: 0,
    echoFeedback: 0,
  },
  "28": {
    name: "Warmth Spreading",
    color: "rose",
    volume: 0.8,
    balance: 0.5,
    echoDelay: 0.3,
    echoFeedback: 0.15,
  },
  "29": {
    name: "Relax Deeper",
    color: "rose",
    volume: 0.8,
    balance: -0.3,
    echoDelay: 0.4,
    echoFeedback: 0.2,
  },
  "30": {
    name: "Change Naturally",
    color: "rose",
    volume: 0.8,
    balance: 0.3,
    echoDelay: 0,
    echoFeedback: 0,
  },

  // Row 6 - Green
  "31": {
    name: "Touch Thumb",
    color: "green",
    volume: 0.8,
    balance: -0.3,
    echoDelay: 0.1,
    echoFeedback: 0.05,
  },
  "32": {
    name: "Hear Word",
    color: "green",
    volume: 0.8,
    balance: 0.3,
    echoDelay: 0,
    echoFeedback: 0,
  },
  "33": {
    name: "Link Feeling",
    color: "green",
    volume: 0.8,
    balance: -0.4,
    echoDelay: 0.2,
    echoFeedback: 0.1,
  },
  "34": {
    name: "Peace Command",
    color: "green",
    volume: 0.8,
    balance: 0.4,
    echoDelay: 0,
    echoFeedback: 0,
  },
  "35": {
    name: "Anchor State",
    color: "green",
    volume: 0.8,
    balance: -0.2,
    echoDelay: 0.1,
    echoFeedback: 0.05,
  },
  "36": {
    name: "Stimulus Set",
    color: "green",
    volume: 0.8,
    balance: 0.2,
    echoDelay: 0,
    echoFeedback: 0,
  },
}

// Export the configuration for use in the audio provider
export { meditationPads }
export type { PadConfig }
