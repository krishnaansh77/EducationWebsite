"use client"

import { useEffect, useRef, useState } from "react"
import { Users, BookOpen, Trophy, Star, TrendingUp, Award } from "lucide-react"

const stats = [
  { 
    icon: Users, 
    value: 200000, 
    suffix: "+", 
    label: "Active Students", 
    prefix: "",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  { 
    icon: BookOpen, 
    value: 50000, 
    suffix: "+", 
    label: "Practice Questions", 
    prefix: "",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  { 
    icon: Trophy, 
    value: 95, 
    suffix: "%", 
    label: "Success Rate", 
    prefix: "",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  { 
    icon: Star, 
    value: 4.9, 
    suffix: "/5", 
    label: "Student Rating", 
    prefix: "", 
    decimals: 1,
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600"
  },
]

function useCountUp(end: number, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = countRef.current

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = startValue + (end - startValue) * easeOutQuart

      countRef.current = currentValue
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString('en-IN')

  return { count: formattedCount, ref: elementRef, isVisible }
}

export function AnimatedStats() {
  return (
    <section className="relative border-y border-border bg-gradient-to-r from-card via-muted/20 to-card py-12 md:py-16">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-primary/5 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => {
            const { count, ref, isVisible } = useCountUp(stat.value, 2000, stat.decimals || 0)
            
            return (
              <div 
                key={stat.label} 
                ref={ref}
                className={`group relative text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bgColor} transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  <stat.icon className={`h-7 w-7 ${stat.iconColor}`} />
                </div>
                <p className={`bg-gradient-to-r ${stat.color} bg-clip-text text-3xl font-bold text-transparent md:text-4xl`}>
                  {stat.prefix}{count}{stat.suffix}
                </p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
                
                {/* Hover indicator */}
                <div className={`mx-auto mt-3 h-1 w-0 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-300 group-hover:w-12`} />
              </div>
            )
          })}
        </div>

        {/* Trust line */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-border pt-10">
          <p className="text-sm text-muted-foreground">Trusted by students preparing for:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {["UPSC", "SSC", "Banking", "Railways", "State PCS"].map((exam, i) => (
              <div 
                key={exam}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
              >
                {exam}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
