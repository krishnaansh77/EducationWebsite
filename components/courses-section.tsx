"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Clock, Users, Star, BookOpen, ArrowRight, Sparkles, GraduationCap } from "lucide-react"

const allCourses = [
  {
    title: "UPSC Civil Services",
    category: "UPSC",
    categorySlug: "upsc",
    description: "Complete preparation for Prelims, Mains, and Interview with expert faculty.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    duration: "12 months",
    students: "45K+",
    rating: 4.9,
    price: "15,999",
    originalPrice: "29,999",
    popular: true,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "SSC CGL Complete",
    category: "SSC",
    categorySlug: "ssc",
    description: "Master all sections with practice sets and previous year question analysis.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
    duration: "6 months",
    students: "32K+",
    rating: 4.8,
    price: "4,999",
    originalPrice: "9,999",
    popular: false,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Bank PO & Clerk",
    category: "Banking",
    categorySlug: "banking",
    description: "SBI, IBPS, RBI preparation with sectional tests and mock interviews.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    duration: "8 months",
    students: "28K+",
    rating: 4.8,
    price: "6,999",
    originalPrice: "12,999",
    popular: true,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Railway NTPC/Group D",
    category: "Railways",
    categorySlug: "railways",
    description: "Complete syllabus coverage with speed tests and memory techniques.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop",
    duration: "4 months",
    students: "50K+",
    rating: 4.7,
    price: "2,999",
    originalPrice: "5,999",
    popular: false,
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "UPSC CAPF",
    category: "UPSC",
    categorySlug: "upsc",
    description: "Central Armed Police Forces exam preparation with physical test guidance.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    duration: "6 months",
    students: "12K+",
    rating: 4.6,
    price: "8,999",
    originalPrice: "15,999",
    popular: false,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "SSC CHSL",
    category: "SSC",
    categorySlug: "ssc",
    description: "Combined Higher Secondary Level exam prep with typing practice.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    duration: "5 months",
    students: "25K+",
    rating: 4.7,
    price: "3,499",
    originalPrice: "6,999",
    popular: false,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "RBI Grade B",
    category: "Banking",
    categorySlug: "banking",
    description: "Reserve Bank of India Officer Grade B exam complete preparation.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
    duration: "10 months",
    students: "15K+",
    rating: 4.9,
    price: "12,999",
    originalPrice: "24,999",
    popular: true,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "RRB ALP",
    category: "Railways",
    categorySlug: "railways",
    description: "Assistant Loco Pilot exam preparation with technical subjects.",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&h=400&fit=crop",
    duration: "5 months",
    students: "20K+",
    rating: 4.5,
    price: "2,499",
    originalPrice: "4,999",
    popular: false,
    gradient: "from-rose-500 to-pink-500",
  },
]

const examCategories = [
  { name: "All Exams", slug: "all", count: allCourses.length, color: "bg-gradient-to-r from-primary to-emerald-600" },
  { name: "UPSC", slug: "upsc", count: allCourses.filter(c => c.category === "UPSC").length, color: "bg-gradient-to-r from-emerald-500 to-teal-500" },
  { name: "SSC", slug: "ssc", count: allCourses.filter(c => c.category === "SSC").length, color: "bg-gradient-to-r from-blue-500 to-indigo-500" },
  { name: "Banking", slug: "banking", count: allCourses.filter(c => c.category === "Banking").length, color: "bg-gradient-to-r from-amber-500 to-orange-500" },
  { name: "Railways", slug: "railways", count: allCourses.filter(c => c.category === "Railways").length, color: "bg-gradient-to-r from-rose-500 to-pink-500" },
]

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredCourses = activeCategory === "all" 
    ? allCourses.slice(0, 4)
    : allCourses.filter(course => course.category.toLowerCase() === activeCategory).slice(0, 4)

  return (
    <section id="courses" className="relative py-20 md:py-32">
      {/* Background decorations */}
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
              <GraduationCap className="mr-1.5 h-3.5 w-3.5" />
              Popular Courses
            </Badge>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              <span className="text-balance">Start Your Journey </span>
              <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Today</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Choose from our expertly designed courses for all major competitive examinations.
            </p>
          </div>
          <Link href="/exams/upsc">
            <Button variant="outline" className="gap-2 border-2 transition-all hover:border-primary hover:bg-primary/5">
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {examCategories.map((category) => (
            <Button
              key={category.slug}
              variant={activeCategory === category.slug ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.slug)}
              className={`transition-all duration-300 ${
                activeCategory === category.slug 
                  ? `${category.color} border-0 text-white shadow-lg` 
                  : "hover:border-primary/50 hover:text-primary"
              }`}
            >
              {category.name}
              <Badge 
                variant="secondary" 
                className={`ml-2 ${
                  activeCategory === category.slug 
                    ? "bg-white/20 text-white" 
                    : "bg-muted"
                }`}
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredCourses.map((course, index) => (
            <Card 
              key={course.title} 
              className="group overflow-hidden border-border/50 bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {course.popular && (
                  <Badge className="absolute left-3 top-3 bg-gradient-to-r from-accent to-orange-500 text-white shadow-lg">
                    <Sparkles className="mr-1 h-3 w-3" />
                    Popular
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <Link href={`/exams/${course.categorySlug}`}>
                  <Badge 
                    className={`absolute bottom-3 left-3 cursor-pointer bg-gradient-to-r ${course.gradient} text-white shadow-lg transition-transform hover:scale-105`}
                  >
                    {course.category}
                  </Badge>
                </Link>
                
                {/* Price tag */}
                <div className="absolute bottom-3 right-3 rounded-lg bg-white/90 px-2 py-1 backdrop-blur-sm">
                  <span className="text-sm font-bold text-foreground">₹{course.price}</span>
                </div>
              </div>

              <CardHeader className="p-4 pb-2">
                <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                  {course.title}
                </h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="p-4 pt-0">
                {/* Stats */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-blue-500" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-emerald-500" />
                    {course.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {course.rating}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between border-t border-border p-4">
                <div>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{course.originalPrice}
                  </span>
                  <span className="ml-2 rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-700">
                    {Math.round((1 - parseInt(course.price.replace(',', '')) / parseInt(course.originalPrice.replace(',', ''))) * 100)}% OFF
                  </span>
                </div>
                <Link href={`/exams/${course.categorySlug}`}>
                  <Button size="sm" className={`bg-gradient-to-r ${course.gradient} shadow-lg transition-all hover:shadow-xl`}>
                    Enroll
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Show more button when filtered */}
        {activeCategory !== "all" && (
          <div className="mt-8 text-center">
            <Link href={`/exams/${activeCategory}`}>
              <Button variant="outline" size="lg" className="gap-2 border-2 transition-all hover:border-primary hover:bg-primary/5">
                View All {examCategories.find(c => c.slug === activeCategory)?.name} Courses
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-card to-accent/5 p-8 text-center shadow-xl md:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-emerald-600 shadow-lg shadow-primary/25">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h3 className="mt-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
            Not Sure Which Course to Choose?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Take our free assessment test and get personalized course recommendations based on your 
            target exam and current preparation level.
          </p>
          <Link href="/sign-up">
            <Button size="lg" className="mt-6 gap-2 bg-gradient-to-r from-primary to-emerald-600 shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30">
              Take Free Assessment
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
