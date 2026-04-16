"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "IAS Officer, AIR 45",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya&backgroundColor=b6e3f4",
    content: "ExamWaliSite transformed my preparation journey. The structured approach and mentorship helped me crack UPSC in my second attempt. The mock tests were incredibly close to the actual exam pattern.",
    exam: "UPSC CSE 2024",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "SBI PO",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul&backgroundColor=c0aede",
    content: "The banking course was exactly what I needed. Daily quizzes, current affairs updates, and the doubt resolution system helped me stay on track. Cleared SBI PO in my first attempt!",
    exam: "SBI PO 2024",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    role: "SSC CGL Topper",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=anjali&backgroundColor=ffd5dc",
    content: "Best platform for SSC preparation. The previous year analysis and topic-wise tests made my revision super effective. The AI-powered weak area identification was a game-changer.",
    exam: "SSC CGL 2024",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "RBI Grade B Officer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikram&backgroundColor=d1d4f9",
    content: "The RBI Grade B course was comprehensive and well-structured. The mentors are extremely knowledgeable and always available. Highly recommend for serious aspirants.",
    exam: "RBI Grade B 2023",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Railway NTPC Selected",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=neha&backgroundColor=ffdfbf",
    content: "Affordable and high-quality content. The video lectures are easy to understand, and the practice questions cover everything. Got selected in Railways NTPC thanks to this platform.",
    exam: "RRB NTPC 2024",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "State PCS Officer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amit&backgroundColor=c1f0db",
    content: "The state-specific content for UPPSC was extremely helpful. The current affairs compilations and answer writing practice improved my mains score significantly.",
    exam: "UPPSC 2023",
    rating: 5,
  },
]

const successStats = [
  { value: "12,500+", label: "Selections" },
  { value: "250+", label: "Top 100 Rankers" },
  { value: "98%", label: "Student Satisfaction" },
  { value: "4.9/5", label: "Average Rating" },
]

export function TestimonialsSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  
  return (
    <>
    {/* Video Modal */}
    {isVideoOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
        <div className="relative w-full max-w-4xl">
          <Button
            variant="ghost"
            size="icon"
            className="absolute -top-12 right-0 text-white hover:bg-white/10"
            onClick={() => setIsVideoOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="aspect-video overflow-hidden rounded-xl bg-foreground">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Success Stories"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    )}
    <section id="testimonials" className="relative overflow-hidden py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-muted/30" />
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Success Stories
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">Our Students, Our Pride</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of successful aspirants who transformed their dreams into reality with ExamWaliSite.
          </p>
        </div>

        {/* Success Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {successStats.map((stat) => (
            <div 
              key={stat.label} 
              className="rounded-xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20" />
                
                {/* Rating */}
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full bg-muted"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Exam Badge */}
                <Badge 
                  variant="secondary" 
                  className="mt-4 bg-primary/10 text-primary"
                >
                  {testimonial.exam}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonial CTA */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-foreground">
          <div className="grid items-center md:grid-cols-2">
            <div className="p-8 md:p-12">
              <Badge className="bg-primary/20 text-primary">Video Testimonials</Badge>
              <h3 className="mt-4 font-serif text-2xl font-bold text-background md:text-3xl">
                Hear From Our Toppers
              </h3>
              <p className="mt-3 text-background/70">
                Watch inspiring stories from students who cracked their dream exams 
                and learn from their preparation strategies.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=topper${i}`}
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-foreground bg-muted"
                    />
                  ))}
                </div>
                <span className="text-sm text-background/70">
                  100+ video testimonials from successful aspirants
                </span>
              </div>
            </div>
            <div className="relative aspect-video md:aspect-auto md:h-full">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                alt="Success stories"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
                >
                  <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
