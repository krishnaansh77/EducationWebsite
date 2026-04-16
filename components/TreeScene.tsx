"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, MoonStar, Sparkles } from "lucide-react"
import Landscape from "@/components/Landscape"
import Particles from "@/components/Particles"
import { Button } from "@/components/ui/button"
import { FOCUS_TREE_CHECKPOINTS, FOCUS_TREE_STAGES, FOCUS_TREE_STORAGE_KEY, getFocusTreeStageIndex } from "@/lib/focus-tree"

const STAGE_DURATION_MS = 10 * 1000

export default function TreeScene() {
  const [stage, setStage] = useState(0)
  const [nextStageIn, setNextStageIn] = useState(STAGE_DURATION_MS)
  const startTimeRef = useRef<number>(Date.now())
  const stageRef = useRef(0)

  useEffect(() => {
    const storedValue = window.localStorage.getItem(FOCUS_TREE_STORAGE_KEY)
    const initialValue = storedValue ? Number.parseInt(storedValue, 10) : 0
    const safeInitialValue = Number.isFinite(initialValue) ? initialValue : 0
    const currentStage = getFocusTreeStageIndex(safeInitialValue)

    stageRef.current = currentStage
    setStage(currentStage)
    startTimeRef.current = Date.now() - safeInitialValue * 1000

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current
      const seconds = Math.floor(elapsed / 1000)
      const computedStage = getFocusTreeStageIndex(seconds)

      if (computedStage !== stageRef.current) {
        stageRef.current = computedStage
        setStage(computedStage)
      }

      const nextCheckpoint = FOCUS_TREE_CHECKPOINTS.find((checkpoint) => checkpoint > seconds)
      setNextStageIn(nextCheckpoint ? Math.max(0, (nextCheckpoint - seconds) * 1000) : 0)
      window.localStorage.setItem(FOCUS_TREE_STORAGE_KEY, String(seconds))
    }, 500)

    return () => window.clearInterval(interval)
  }, [])

  const isMature = stage === FOCUS_TREE_STAGES.length - 1
  const stageLabels = ["First Glow", "Guiding Lights", "Rescue Sky", "Night Full of Hope", "Beacon Field"]

  return (
    <div className="relative h-screen w-full overflow-hidden select-none text-white">
      <Landscape stage={stage} />
      <Particles stage={stage} />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/82 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-md">
            Firefly Vigil
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-7xl flex-1 gap-10 px-4 pb-8 pt-2 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/88 shadow-sm backdrop-blur-md">
              <MoonStar className="h-4 w-4 text-cyan-200" />
              Night lake, warm light, and rising fireflies
            </div>
            <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Be The Hero Of Someone&apos;s Life
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/78">
              Save someone from disappearing into the dark. The longer you stay, the more warm lights rise from
              the night, drift upward like fireflies, and glow for a moment before fading away.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/18 bg-black/14 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-cyan-100/72">Current Stage</p>
                  <h2 className="mt-2 text-3xl font-bold text-white">{stageLabels[stage]}</h2>
                  <p className="mt-2 max-w-md text-sm text-white/70">{FOCUS_TREE_STAGES[stage].note}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/72">Stage</p>
                  <p className="mt-2 text-2xl font-bold text-white">{stage + 1}</p>
                </div>
                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/72">Fireflies</p>
                  <p className="mt-2 text-2xl font-bold text-white">{10 + stage * 8}</p>
                </div>
                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/72">Mission</p>
                  <p className="mt-2 text-2xl font-bold text-white">Hold On</p>
                </div>
              </div>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/12">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,rgba(255,247,178,0.95),rgba(166,225,95,0.96),rgba(76,212,235,0.96))] transition-all duration-700"
                  style={{ width: `${((stage + 1) / FOCUS_TREE_STAGES.length) * 100}%` }}
                />
              </div>

              <div className="mt-6 flex flex-col items-center gap-3 pointer-events-none">
                <div className="flex items-center gap-3">
                  {Array.from({ length: FOCUS_TREE_STAGES.length }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-full transition-all duration-700"
                      style={{
                        width: i === stage ? 20 : 10,
                        height: i === stage ? 20 : 10,
                        background: i <= stage ? "rgba(120,240,200,0.95)" : "rgba(120,240,200,0.2)",
                        boxShadow: i === stage ? "0 0 14px 4px rgba(80,220,180,0.7)" : "none",
                      }}
                    />
                  ))}
                </div>
                <div
                  className="flex flex-col items-center gap-1 rounded-[20px] border border-[rgba(80,220,180,0.18)] px-[22px] py-[7px]"
                  style={{ background: "rgba(0,15,30,0.45)", backdropFilter: "blur(10px)" }}
                >
                  <span
                    className="text-sm font-semibold uppercase tracking-widest"
                    style={{ color: "rgba(160,245,220,0.95)", textShadow: "0 0 12px rgba(80,220,180,0.6)", letterSpacing: "0.22em" }}
                  >
                    {stageLabels[stage]}
                  </span>
                  {!isMature && (
                    <span className="text-xs" style={{ color: "rgba(120,210,190,0.55)" }}>
                      next growth in {Math.ceil(nextStageIn / 1000)}s
                    </span>
                  )}
                  {isMature && (
                    <span className="text-xs" style={{ color: "rgba(120,240,160,0.55)" }}>
                      fully grown ✦
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-white text-slate-950 hover:bg-cyan-50 pointer-events-auto">
                  <Link href="/">Return to Study Hub</Link>
                </Button>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/76">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  More time means more lights in the sky
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[620px]">
            <div className="absolute inset-0 rounded-[2.7rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] shadow-[0_36px_120px_rgba(0,0,0,0.28)] backdrop-blur-[2px]" />
            <div className="absolute inset-x-[18%] bottom-[17%] h-20 rounded-full bg-[radial-gradient(circle,rgba(255,180,76,0.18),rgba(255,180,76,0.06),transparent_70%)] blur-2xl" />
            <div className="absolute inset-x-[25%] bottom-[23%] h-6 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_72%)] blur-md" />
            <div
              className="absolute inset-0"
              style={{
                zIndex: 5,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
