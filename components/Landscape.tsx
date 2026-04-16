type LandscapeProps = {
  stage: number
}

export default function Landscape({ stage }: LandscapeProps) {
  const lightStrength = 0.28 + stage * 0.06

  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#06295f_0%,#0b5692_36%,#2ed7eb_68%,#88eff8_100%)]" />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 60%, rgba(255,244,200,${lightStrength}), transparent 16%), radial-gradient(circle at 50% 88%, rgba(53,190,230,0.22), transparent 28%)`,
        }}
      />

      <div className="absolute left-[28%] top-[11%] h-28 w-28 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.9),rgba(255,255,255,0.25),transparent_68%)] blur-xl" />
      <div className="absolute left-[30%] top-[12%] h-20 w-12 -rotate-[24deg] rounded-full border-l-4 border-t-4 border-white/95 opacity-95 shadow-[0_0_24px_rgba(255,255,255,0.55)]" />

      <div className="absolute inset-x-0 bottom-[39%] h-[19%] bg-[linear-gradient(180deg,rgba(9,49,85,0),rgba(10,37,73,0.3))]" />
      <div className="absolute left-0 bottom-[39%] h-[22%] w-[34%] bg-[linear-gradient(180deg,rgba(4,31,57,0.1),rgba(4,31,57,0.82))] [clip-path:polygon(0_100%,0_28%,18%_22%,34%_41%,49%_19%,68%_35%,84%_21%,100%_48%,100%_100%)]" />
      <div className="absolute right-0 bottom-[39%] h-[22%] w-[34%] bg-[linear-gradient(180deg,rgba(4,31,57,0.1),rgba(4,31,57,0.82))] [clip-path:polygon(0_100%,0_46%,15%_24%,34%_40%,52%_20%,71%_39%,87%_22%,100%_32%,100%_100%)]" />
      <div className="absolute inset-x-[20%] bottom-[38.5%] h-[9%] bg-[linear-gradient(180deg,rgba(41,135,197,0.2),rgba(9,57,113,0.92))] [clip-path:polygon(0_100%,0_74%,8%_56%,15%_68%,23%_52%,31%_66%,39%_50%,47%_64%,55%_48%,63%_66%,71%_50%,79%_62%,87%_46%,94%_58%,100%_50%,100%_100%)]" />

      <div className="absolute inset-x-0 bottom-0 h-[39%] bg-[linear-gradient(180deg,rgba(8,82,138,0.8),rgba(2,42,83,0.96))]" />
      <div className="focus-lake-shimmer absolute inset-x-0 bottom-0 h-[39%] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_24%,rgba(255,255,255,0.04)_42%,transparent_62%)] opacity-70" />
      <div className="absolute left-1/2 bottom-[38.6%] h-px w-[78%] -translate-x-1/2 bg-white/55" />
    </>
  )
}
