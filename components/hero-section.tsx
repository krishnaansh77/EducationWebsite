"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, CheckCircle2, Users, BookOpen, Trophy, Sparkles, Flame, Clock3, BrainCircuit } from "lucide-react"

const stats = [
  { value: "2L+", label: "Active Students", icon: Users },
  { value: "50K+", label: "Practice Questions", icon: BookOpen },
  { value: "95%", label: "Success Rate", icon: Trophy },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 md:pb-32 md:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[72%] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_28%),linear-gradient(180deg,rgba(247,252,250,0.92),rgba(244,248,246,0.62),transparent_100%)]" />
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-accent/15 via-accent/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-t from-blue-500/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute left-[10%] top-[18%] h-40 w-40 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute left-[26%] top-[46%] h-32 w-32 rounded-full bg-amber-100/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="relative flex h-full flex-col items-start">
            <div className="absolute inset-x-0 top-0 bottom-0 -z-10 rounded-[2.6rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(255,255,255,0.56),rgba(233,245,239,0.42))] shadow-[0_32px_90px_rgba(23,80,56,0.08)] ring-1 ring-white/60 backdrop-blur-sm" />
            <div className="absolute -left-10 top-20 -z-10 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-[6%] top-[18%] -z-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute right-10 top-10 -z-10 h-32 w-44 rounded-[100%] border border-primary/10" />
            <div className="absolute left-10 bottom-10 -z-10 h-28 w-36 rounded-[100%] border border-emerald-200/40" />
            <div className="relative flex h-full flex-col items-start rounded-[2.6rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
              <Badge variant="secondary" className="mb-6 gap-2 border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                New: AI-Powered Learning Now Available
                <Sparkles className="ml-1 h-3.5 w-3.5 text-accent" />
              </Badge>

              <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-balance">Ace Your</span>
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Competitive Exams
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 3 100 3 150 6C200 9 250 5 298 8" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                        <stop stopColor="#2d6a4f"/>
                        <stop offset="0.5" stopColor="#40916c"/>
                        <stop offset="1" stopColor="#52b788"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Transform your exam preparation with personalized study plans, expert-curated content, 
                and AI-driven insights. Join <span className="font-semibold text-primary">2 lakh+</span> successful aspirants.
              </p>

              {/* Feature List */}
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  { text: "Free Mock Tests & Quizzes", color: "text-emerald-600" },
                  { text: "Expert Mentorship Programs", color: "text-blue-600" },
                  { text: "Daily Current Affairs Updates", color: "text-amber-600" }
                ].map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3 text-foreground">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className={`h-4 w-4 ${feature.color}`} />
                    </div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/sign-up">
                  <Button size="lg" className="group h-12 gap-2 bg-gradient-to-r from-primary to-emerald-600 px-6 text-base shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30">
                    Start Learning Free
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline" className="h-12 gap-2 border-2 px-6 text-base transition-colors hover:border-primary hover:bg-primary/5">
                    <Play className="h-4 w-4 text-accent" />
                    Watch Demo
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-auto pt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-background bg-muted ring-2 ring-background"
                      style={{
                        backgroundImage: `url(https://api.dicebear.com/7.x/avataaars/svg?seed=student${i})`,
                        backgroundSize: "cover",
                      }}
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-foreground">4.9/5</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="h-4 w-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-muted-foreground">from 10K+ reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual/Stats Card */}
          <div className="relative flex h-full flex-col">
            {/* Main Card */}
            <div className="relative flex h-full overflow-hidden rounded-[2.6rem] border border-border bg-gradient-to-br from-card via-card to-muted/30 p-8 shadow-2xl shadow-primary/10">
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 blur-2xl" />
              <div className="absolute inset-x-8 top-5 h-24 rounded-full bg-gradient-to-r from-primary/8 via-emerald-200/10 to-sky-200/10 blur-2xl" />
              <div className="absolute right-8 top-8 h-20 w-28 rounded-[100%] border border-primary/10" />
              <div className="absolute left-8 bottom-8 h-20 w-24 rounded-[100%] border border-emerald-200/30" />
              
              {/* Mock Dashboard Preview */}
              <div className="relative flex h-full w-full flex-col space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Welcome back, Aspirant!</p>
                    <h3 className="text-xl font-semibold text-foreground">Your Progress Dashboard</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-emerald-50/60 p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700/70">Today&apos;s Momentum</p>
                        <p className="mt-1 text-base font-semibold text-foreground">You&apos;re ahead of 84% of learners this week</p>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                        <Flame className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm">7-day streak</span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-sky-700 shadow-sm">3 mock tests today</span>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-1">
                    <div className="rounded-2xl border border-border/70 bg-white/75 p-4 shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        <Clock3 className="h-3.5 w-3.5 text-sky-500" />
                        Study Time
                      </div>
                      <p className="mt-2 text-2xl font-bold text-foreground">2h 45m</p>
                      <p className="text-xs text-emerald-600">+18% from yesterday</p>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-3 rounded-2xl border border-border/60 bg-white/70 p-4 shadow-sm">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Overall Progress</span>
                    <span className="font-semibold text-primary">72%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-primary via-emerald-500 to-teal-500 transition-all duration-1000" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {[
                      { label: "Quant", value: "81%", tone: "bg-emerald-100 text-emerald-700" },
                      { label: "Reasoning", value: "74%", tone: "bg-sky-100 text-sky-700" },
                      { label: "GK", value: "68%", tone: "bg-amber-100 text-amber-700" },
                    ].map((subject) => (
                      <div key={subject.label} className="rounded-xl bg-background/90 p-3 text-center">
                        <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{subject.label}</p>
                        <p className="mt-1 text-sm font-bold text-foreground">{subject.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div 
                      key={stat.label} 
                      className={`rounded-2xl p-4 text-center transition-all hover:scale-105 ${
                        index === 0 ? 'bg-gradient-to-br from-emerald-50 to-emerald-100/50' :
                        index === 1 ? 'bg-gradient-to-br from-blue-50 to-blue-100/50' :
                        'bg-gradient-to-br from-amber-50 to-amber-100/50'
                      }`}
                    >
                      <stat.icon className={`mx-auto mb-2 h-5 w-5 ${
                        index === 0 ? 'text-emerald-600' :
                        index === 1 ? 'text-blue-600' :
                        'text-amber-600'
                      }`} />
                      <p className="text-xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-2xl border border-border/60 bg-white/70 p-4 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">Weekly Accuracy Curve</h4>
                        <p className="text-xs text-muted-foreground">Measured across mock tests and sectional quizzes</p>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <BrainCircuit className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex h-36 items-end gap-3">
                      {[58, 65, 62, 74, 71, 84, 79].map((height, i) => (
                        <div key={i} className="flex flex-1 flex-col items-center gap-2">
                          <div className="relative flex h-full w-full items-end">
                            <div
                              className={`w-full rounded-t-[1rem] ${
                                i === 5
                                  ? "bg-gradient-to-t from-emerald-600 to-emerald-300"
                                  : i === 6
                                    ? "bg-gradient-to-t from-sky-600 to-sky-300"
                                    : "bg-gradient-to-t from-primary/80 to-primary/35"
                              }`}
                              style={{ height: `${height}%` }}
                            />
                          </div>
                          <span className="text-[11px] font-medium text-muted-foreground">
                            {["M", "T", "W", "T", "F", "S", "S"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-white/70 p-4 shadow-sm">
                    <h4 className="text-sm font-semibold text-foreground">Next Recommended Focus</h4>
                    <div className="mt-4 space-y-3">
                      {[
                        { title: "Polity Revision", meta: "18 min sprint", tone: "bg-emerald-500" },
                        { title: "Seating Arrangement", meta: "12 questions", tone: "bg-sky-500" },
                        { title: "Current Affairs Recap", meta: "10 min read", tone: "bg-amber-500" },
                      ].map((item) => (
                        <div key={item.title} className="flex items-center gap-3 rounded-xl bg-background/90 p-3">
                          <div className={`h-10 w-1 rounded-full ${item.tone}`} />
                          <div>
                            <p className="text-sm font-medium text-foreground">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.meta}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Recent Activity</h4>
                  {[
                    { title: "Completed: Quantitative Aptitude Quiz", score: "85%", time: "2h ago", color: "bg-emerald-500" },
                    { title: "Started: Current Affairs Module", score: "In Progress", time: "5h ago", color: "bg-blue-500" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center justify-between rounded-xl bg-muted/50 p-3 transition-colors hover:bg-muted">
                      <div className="flex items-center gap-3">
                        <div className={`h-2 w-2 rounded-full ${activity.color}`} />
                        <div>
                          <p className="text-sm font-medium text-foreground">{activity.title}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={activity.score === "In Progress" ? "secondary" : "default"} 
                        className={`text-xs ${activity.score !== "In Progress" ? "bg-emerald-100 text-emerald-700" : ""}`}
                      >
                        {activity.score}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Indicator */}
            <div 
              className="absolute -right-6 bottom-1/3 hidden items-center gap-2 rounded-full border border-border/80 bg-card/95 px-4 py-2 shadow-lg backdrop-blur lg:flex"
              style={{ animation: 'float 4s ease-in-out infinite reverse' }}
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
              </span>
              <span className="text-xs font-medium text-foreground">1,234 Students Online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
