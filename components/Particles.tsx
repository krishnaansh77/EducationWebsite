type ParticlesProps = {
  stage: number
}

const stars = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: 18 + (index * 6.5) % 64,
  top: 9 + (index * 4.5) % 18,
  size: 1.5 + (index % 3),
  delay: `${index * 0.4}s`,
}))

export default function Particles({ stage }: ParticlesProps) {
  const count = 10 + stage * 8
  const fireflies = Array.from({ length: count }, (_, index) => ({
    id: index,
    left: 16 + ((index * 7.7) % 68),
    bottom: 14 + ((index * 5.4) % 28),
    size: 8 + (index % 4) * 3,
    delay: `${index * 0.25}s`,
    duration: `${5.2 + (index % 5) * 0.7}s`,
    drift: (index % 2 === 0 ? 1 : -1) * (10 + (index % 4) * 6),
    sway: (index % 2 === 0 ? 1 : -1) * (6 + (index % 3) * 4),
    opacity: 0.38 + (index % 4) * 0.12,
    pulseDelay: `${index * 0.18}s`,
  }))

  return (
    <div className="absolute inset-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="focus-star absolute rounded-full bg-white/90"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
          }}
          />
      ))}

      {fireflies.map((firefly) => (
        <div
          key={firefly.id}
          className="focus-firefly absolute"
          style={{
            left: `${firefly.left}%`,
            bottom: `${firefly.bottom}%`,
            animationDelay: firefly.delay,
            animationDuration: firefly.duration,
            ["--firefly-drift" as string]: `${firefly.drift}px`,
            ["--firefly-sway" as string]: `${firefly.sway}px`,
          }}
        >
          <div
            className="focus-firefly-glow rounded-full bg-[radial-gradient(circle,rgba(255,252,196,0.98),rgba(255,214,102,0.95),rgba(255,163,64,0.55),transparent_72%)]"
            style={{
              width: `${firefly.size}px`,
              height: `${firefly.size * 1.4}px`,
              opacity: firefly.opacity,
              boxShadow: "0 0 18px rgba(255,199,91,0.6), 0 0 28px rgba(255,160,64,0.22)",
              filter: "blur(0.2px)",
              animationDelay: firefly.pulseDelay,
            }}
          />
        </div>
      ))}
    </div>
  )
}
