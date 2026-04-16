"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  FOCUS_TREE_CHECKPOINTS,
  FOCUS_TREE_STAGES,
  FOCUS_TREE_STORAGE_KEY,
  getFocusTreeStageIndex,
} from "@/lib/focus-tree"

export function GrowthCompanion() {
  const [secondsSpent, setSecondsSpent] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const storedValue = window.localStorage.getItem(FOCUS_TREE_STORAGE_KEY)
    const initialValue = storedValue ? Number.parseInt(storedValue, 10) : 0
    const safeInitialValue = Number.isFinite(initialValue) ? initialValue : 0

    setSecondsSpent(safeInitialValue)

    const interval = window.setInterval(() => {
      setSecondsSpent((previous) => {
        const next = previous + 1
        window.localStorage.setItem(FOCUS_TREE_STORAGE_KEY, String(next))
        return next
      })
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  const stageIndex = getFocusTreeStageIndex(secondsSpent)
  const stage = useMemo(() => FOCUS_TREE_STAGES[stageIndex], [stageIndex])
  const labels = ["First Glow", "Guiding Lights", "Rescue Sky", "Night Full of Hope", "Beacon Field"]
  const nextCheckpoint = FOCUS_TREE_CHECKPOINTS.find((checkpoint) => checkpoint > secondsSpent) ?? null
  const stageStart = FOCUS_TREE_CHECKPOINTS[getFocusTreeStageIndex(secondsSpent)]
  const stageEnd = nextCheckpoint ?? FOCUS_TREE_CHECKPOINTS[FOCUS_TREE_CHECKPOINTS.length - 1]
  const stageProgress =
    nextCheckpoint === null
      ? 100
      : Math.min(
          100,
          Math.max(0, ((secondsSpent - stageStart) / Math.max(1, stageEnd - stageStart)) * 100)
        )
  const minutesSpent = Math.floor(secondsSpent / 60)
  const secondsRemainder = secondsSpent % 60

  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 z-20 hidden lg:block">
      <Button
        asChild
        size="sm"
        className="pointer-events-auto h-auto rounded-full border border-emerald-200/70 bg-white/92 px-3 py-2 text-emerald-950 shadow-[0_14px_38px_rgba(16,185,129,0.16)] backdrop-blur-md hover:bg-white"
      >
        <Link href="/focus-tree" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,248,181,0.95),rgba(255,199,91,0.9),rgba(255,140,74,0.82))] shadow-[0_0_18px_rgba(255,190,76,0.45)]">
            <Sparkles className="h-5 w-5 text-white" />
          </span>
          <span className="text-left">
            <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-700/80">
              Hero Lights
            </span>
            <span className="block text-sm font-semibold">{labels[stageIndex] ?? stage.label}</span>
            <span className="block text-xs text-emerald-800/70">
              {minutesSpent}m {secondsRemainder.toString().padStart(2, "0")}s
            </span>
          </span>
          <span className="h-2 w-16 overflow-hidden rounded-full bg-emerald-100">
            <span
              className="block h-full rounded-full bg-[linear-gradient(90deg,rgba(250,204,21,0.95),rgba(34,197,94,0.98),rgba(56,189,248,0.98),rgba(217,70,239,0.95))] transition-all duration-700"
              style={{ width: `${stageProgress}%` }}
            />
          </span>
        </Link>
      </Button>
    </div>
  )
}
