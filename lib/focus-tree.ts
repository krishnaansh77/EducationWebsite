export const FOCUS_TREE_STORAGE_KEY = "examwalisite-growth-seconds"

export const FOCUS_TREE_CHECKPOINTS = [0, 20, 45, 90, 180]

export const FOCUS_TREE_STAGES = [
  {
    label: "Seedling",
    note: "Your study streak just started",
    leaves: 5,
    height: 0.82,
    scale: 0.9,
    canopy: 0.72,
  },
  {
    label: "Sprout",
    note: "Winds are waking the branches",
    leaves: 9,
    height: 1,
    scale: 0.98,
    canopy: 0.86,
  },
  {
    label: "Sapling",
    note: "The crown is filling with color",
    leaves: 13,
    height: 1.18,
    scale: 1.08,
    canopy: 1.02,
  },
  {
    label: "Young Tree",
    note: "The tree now sways with confidence",
    leaves: 18,
    height: 1.42,
    scale: 1.18,
    canopy: 1.2,
  },
  {
    label: "Full Bloom",
    note: "Three minutes of focus reached",
    leaves: 24,
    height: 1.64,
    scale: 1.3,
    canopy: 1.38,
  },
]

export function getFocusTreeStageIndex(seconds: number) {
  return FOCUS_TREE_CHECKPOINTS.reduce((active, checkpoint, index) => {
    return seconds >= checkpoint ? index : active
  }, 0)
}
