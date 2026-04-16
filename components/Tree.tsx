import { FOCUS_TREE_STAGES } from "@/lib/focus-tree"

type TreeProps = {
  stage: number
  isMature: boolean
}

const canopyGroups = [
  { key: "top", left: 50, top: 6, width: 92, height: 34, rotate: -2, tone: "from-lime-200 via-lime-300 to-green-600" },
  { key: "upper-left", left: 37, top: 14, width: 112, height: 42, rotate: -10, tone: "from-lime-100 via-lime-300 to-green-700" },
  { key: "upper-mid", left: 52, top: 16, width: 124, height: 44, rotate: 3, tone: "from-lime-100 via-green-300 to-emerald-700" },
  { key: "upper-right", left: 68, top: 19, width: 118, height: 42, rotate: 9, tone: "from-lime-200 via-green-300 to-green-800" },
  { key: "middle-left", left: 34, top: 31, width: 132, height: 48, rotate: -11, tone: "from-lime-100 via-green-300 to-green-800" },
  { key: "middle-core", left: 50, top: 34, width: 148, height: 52, rotate: -1, tone: "from-lime-100 via-green-300 to-emerald-900" },
  { key: "middle-right", left: 69, top: 35, width: 136, height: 48, rotate: 11, tone: "from-lime-200 via-green-400 to-green-900" },
  { key: "lower-left", left: 38, top: 49, width: 122, height: 40, rotate: -7, tone: "from-green-200 via-green-400 to-emerald-900" },
  { key: "lower-right", left: 64, top: 51, width: 124, height: 40, rotate: 8, tone: "from-green-200 via-green-500 to-emerald-950" },
]

const branchLines = [
  { key: "b1", left: "49%", bottom: "29%", width: 6, height: "27%", rotate: -30 },
  { key: "b2", left: "52%", bottom: "33%", width: 5, height: "24%", rotate: 28 },
  { key: "b3", left: "47.5%", bottom: "40%", width: 4, height: "18%", rotate: -19 },
  { key: "b4", left: "52.6%", bottom: "43%", width: 4, height: "17%", rotate: 18 },
  { key: "b5", left: "50.4%", bottom: "49%", width: 3, height: "13%", rotate: -5 },
]

export default function Tree({ stage, isMature }: TreeProps) {
  const current = FOCUS_TREE_STAGES[Math.min(stage, FOCUS_TREE_STAGES.length - 1)]
  const treeHeight = 320 + current.height * 118
  const treeWidth = 248 + current.canopy * 92
  const trunkHeight = 176 + current.height * 86
  const trunkWidth = 20 + current.height * 9
  const rootWidth = 118 + current.canopy * 34
  const crownScale = 0.82 + current.canopy * 0.26
  const visibleCanopy = canopyGroups.slice(0, 5 + stage)

  return (
    <div
      className="focus-tree-sway absolute left-1/2 bottom-0 -translate-x-1/2"
      style={{ height: `${treeHeight}px`, width: `${treeWidth}px` }}
    >
      <div className="absolute left-1/2 top-[10%] h-24 w-44 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,251,193,0.42),rgba(255,251,193,0.08),transparent_74%)] blur-3xl" />

      {branchLines.map((branch, index) => (
        <div
          key={branch.key}
          className="absolute"
          style={{
            left: branch.left,
            bottom: branch.bottom,
            animation: `float-slow ${4 + index * 0.35}s ease-in-out infinite`,
          }}
        >
          <div
            className="rounded-full bg-[linear-gradient(180deg,#5e3a23_0%,#2d180f_100%)]"
            style={{
              width: `${branch.width}px`,
              height: branch.height,
              transform: `rotate(${branch.rotate}deg)`,
              transformOrigin: branch.rotate < 0 ? "bottom right" : "bottom left",
              boxShadow: "0 5px 14px rgba(13,7,5,0.22)",
            }}
          />
        </div>
      ))}

      <div
        className="absolute bottom-[8%] left-1/2 rounded-[999px] bg-[linear-gradient(180deg,#8a5b39_0%,#5a3522_44%,#2a160e_100%)]"
        style={{
          height: `${trunkHeight}px`,
          width: `${trunkWidth}px`,
          transform: "translateX(-50%)",
          boxShadow: "0 16px 34px rgba(24,12,8,0.22)",
        }}
      >
        <div className="absolute inset-y-[3%] left-[18%] w-[18%] rounded-full bg-[#f5d5ab]/35 blur-[1px]" />
        <div className="absolute inset-y-[8%] left-[44%] w-[8%] rounded-full bg-black/10" />
        <div className="absolute inset-y-[4%] right-[18%] w-[12%] rounded-full bg-black/15" />
      </div>

      <div
        className="absolute bottom-[5%] left-1/2 bg-[linear-gradient(180deg,#7b5a39_0%,#452919_72%,#22140e_100%)]"
        style={{
          width: `${rootWidth}px`,
          height: `${34 + current.height * 14}px`,
          transform: "translateX(-50%)",
          clipPath: "polygon(8% 100%,0 72%,15% 48%,28% 64%,39% 22%,49% 73%,60% 28%,72% 66%,85% 42%,100% 74%,92% 100%)",
          borderRadius: "0 0 999px 999px",
        }}
      />

      <div
        className="absolute left-1/2 top-[4%] -translate-x-1/2"
        style={{ width: `${190 * crownScale}px`, height: `${154 * crownScale}px` }}
      >
        {visibleCanopy.map((layer, index) => (
          <div
            key={layer.key}
            className="focus-canopy-drift absolute rounded-[999px]"
            style={{
              left: `calc(${layer.left}% - ${(layer.width * crownScale) / 2}px)`,
              top: `${layer.top}%`,
              width: `${layer.width * crownScale}px`,
              height: `${layer.height * crownScale}px`,
              transform: `rotate(${layer.rotate}deg)`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div className={`absolute inset-0 rounded-[999px] bg-gradient-to-b ${layer.tone} shadow-[0_10px_24px_rgba(8,44,28,0.2)]`} />
            <div className="absolute left-[12%] top-[16%] h-[26%] w-[44%] rounded-full bg-white/28 blur-sm" />
            <div className="absolute right-[12%] bottom-[18%] h-[22%] w-[32%] rounded-full bg-black/10 blur-sm" />
          </div>
        ))}

        <div className="absolute left-[16%] top-[28%] h-[8%] w-[14%] rounded-full bg-[#fff8d7]/35 blur-md" />
        <div className="absolute right-[18%] top-[24%] h-[8%] w-[14%] rounded-full bg-[#fff7cc]/30 blur-md" />
      </div>

      <div
        className={`focus-tree-reflection absolute left-1/2 bottom-[-56%] -translate-x-1/2 overflow-hidden ${isMature ? "opacity-100" : ""}`}
        style={{ height: `${treeHeight * 0.8}px`, width: `${treeWidth * 0.86}px` }}
      >
        <div className="absolute inset-0 scale-y-[-1] opacity-38 blur-[3px]">
          <div
            className="absolute bottom-[56%] left-1/2 rounded-[999px] bg-[linear-gradient(180deg,rgba(29,18,13,0.44),rgba(8,38,70,0.16),transparent_100%)]"
            style={{
              height: `${trunkHeight * 0.94}px`,
              width: `${trunkWidth * 0.92}px`,
              transform: "translateX(-50%)",
            }}
          />
          <div
            className="absolute left-1/2 top-[4%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(86,164,108,0.44),rgba(7,49,85,0.06),transparent_72%)]"
            style={{ width: `${170 * crownScale}px`, height: `${132 * crownScale}px` }}
          />
        </div>
      </div>
    </div>
  )
}
