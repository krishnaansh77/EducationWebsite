"use client"

import Link from "next/link"
import { 
  FileText, 
  Video, 
  Brain, 
  Users, 
  Calendar, 
  MessageCircle,
  BookOpen,
  Target,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Zap
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: FileText,
    title: "Free Mock Tests",
    description: "Practice with 500+ topic-wise and full-length mock tests designed by exam experts.",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "group-hover:border-blue-200",
  },
  {
    icon: Video,
    title: "Video Courses",
    description: "Learn from India's top educators with HD video lectures and downloadable notes.",
    color: "bg-gradient-to-br from-amber-500 to-orange-500",
    lightColor: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "group-hover:border-amber-200",
  },
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Get personalized study plans and intelligent recommendations based on your performance.",
    color: "bg-gradient-to-br from-emerald-500 to-teal-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "group-hover:border-emerald-200",
    badge: "New",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Connect with experienced mentors for one-on-one guidance and doubt resolution.",
    color: "bg-gradient-to-br from-rose-500 to-pink-500",
    lightColor: "bg-rose-50",
    textColor: "text-rose-600",
    borderColor: "group-hover:border-rose-200",
  },
  {
    icon: Calendar,
    title: "Current Affairs",
    description: "Stay updated with daily news, monthly compilations, and exam-focused current affairs.",
    color: "bg-gradient-to-br from-indigo-500 to-violet-500",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    borderColor: "group-hover:border-indigo-200",
  },
  {
    icon: MessageCircle,
    title: "24/7 Doubt Support",
    description: "Get your doubts resolved instantly with our round-the-clock support system.",
    color: "bg-gradient-to-br from-teal-500 to-cyan-500",
    lightColor: "bg-teal-50",
    textColor: "text-teal-600",
    borderColor: "group-hover:border-teal-200",
  },
]

const highlights = [
  {
    number: "01",
    title: "Comprehensive Study Material",
    description: "Access structured notes, PDFs, and handwritten materials for all major competitive exams including UPSC, SSC, Banking, Railways, and State PCS.",
    icon: BookOpen,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    number: "02", 
    title: "Performance Analytics",
    description: "Track your progress with detailed analytics, identify weak areas, and get actionable insights to improve your performance.",
    icon: Target,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    number: "03",
    title: "Smart Revision System",
    description: "Our spaced repetition algorithm ensures you revise topics at the optimal time for maximum retention.",
    icon: Sparkles,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute left-0 top-1/4 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-0 bottom-1/4 -z-10 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
            <Zap className="mr-1.5 h-3.5 w-3.5" />
            Everything You Need
          </Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">One Platform,</span>{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Complete Preparation</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From practice tests to mentorship, get everything you need to crack your dream exam under one roof.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className={`group relative overflow-hidden border-border/50 bg-card transition-all duration-500 hover:shadow-xl ${feature.borderColor}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Icon with gradient background */}
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} shadow-lg`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  {feature.badge && (
                    <Badge className="bg-gradient-to-r from-primary to-emerald-600 text-xs text-white">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                
                <div className={`mt-4 flex items-center gap-2 text-sm font-medium ${feature.textColor} opacity-0 transition-all duration-300 group-hover:opacity-100`}>
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>

                {/* Decorative corner gradient */}
                <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${feature.lightColor} opacity-0 blur-2xl transition-opacity group-hover:opacity-100`} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="mt-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <Badge variant="secondary" className="mb-4 w-fit bg-accent/10 text-accent">
                <TrendingUp className="mr-1.5 h-3.5 w-3.5" />
                Why Choose Us
              </Badge>
              <h3 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                <span className="text-balance">Built for</span>{" "}
                <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">Serious Aspirants</span>
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                We understand the challenges of competitive exam preparation. That&apos;s why we&apos;ve 
                built a platform that adapts to your learning style and pace.
              </p>
              
              <div className="mt-8 space-y-6">
                {highlights.map((highlight) => (
                  <div key={highlight.number} className="group flex gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${highlight.bgColor} transition-transform group-hover:scale-110`}>
                      <highlight.icon className={`h-6 w-6 ${highlight.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold ${highlight.color}`}>{highlight.number}</span>
                        <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="#courses">
                <Button className="mt-8 w-fit gap-2 bg-gradient-to-r from-primary to-emerald-600 shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30">
                  Explore All Features
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/10">
                {/* Mock Interface */}
                <div className="border-b border-border bg-gradient-to-r from-muted/50 to-muted/30 p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-4 text-xs text-muted-foreground">Performance Dashboard</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground">Performance Overview</h4>
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        +12% this week
                      </Badge>
                    </div>
                    
                    {/* Chart Placeholder */}
                    <div className="flex h-48 items-end gap-2">
                      {[65, 80, 45, 90, 75, 85, 70].map((height, i) => (
                        <div key={i} className="group/bar relative flex-1">
                          <div 
                            className={`w-full rounded-t-lg transition-all duration-500 group-hover/bar:opacity-80 ${
                              i === 3 ? 'bg-gradient-to-t from-emerald-500 to-emerald-400' :
                              i === 5 ? 'bg-gradient-to-t from-blue-500 to-blue-400' :
                              'bg-gradient-to-t from-primary/80 to-primary/50'
                            }`}
                            style={{ height: `${height}%` }}
                          />
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded bg-foreground px-1.5 py-0.5 text-[10px] text-background opacity-0 transition-opacity group-hover/bar:opacity-100">
                            {height}%
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 p-3 text-center">
                        <p className="text-2xl font-bold text-blue-600">156</p>
                        <p className="text-xs text-muted-foreground">Questions</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-3 text-center">
                        <p className="text-2xl font-bold text-emerald-600">78%</p>
                        <p className="text-xs text-muted-foreground">Accuracy</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/50 p-3 text-center">
                        <p className="text-2xl font-bold text-amber-600">12h</p>
                        <p className="text-xs text-muted-foreground">Study Time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative element */}
              <div className="absolute -right-4 top-1/4 rounded-2xl border border-border bg-card p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                    <TrendingUp className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">Improving!</p>
                    <p className="text-[10px] text-muted-foreground">+15% accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
