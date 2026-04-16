"use client"

import { use } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Users, Star, FileText, Video, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const examData: Record<string, {
  name: string
  fullName: string
  description: string
  heroImage: string
  stats: { label: string; value: string }[]
  courses: { title: string; description: string; duration: string; students: string; rating: number; price: string; originalPrice: string; features: string[] }[]
  mockTests: { title: string; questions: number; duration: string; attempts: string; free: boolean }[]
  upcomingExams: { name: string; date: string }[]
}> = {
  upsc: {
    name: "UPSC",
    fullName: "Union Public Service Commission",
    description: "Prepare for India's most prestigious civil services examination with comprehensive study materials, expert guidance, and AI-powered preparation.",
    heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop",
    stats: [
      { label: "Students Enrolled", value: "45K+" },
      { label: "Success Rate", value: "92%" },
      { label: "Mock Tests", value: "500+" },
      { label: "Video Hours", value: "2000+" },
    ],
    courses: [
      {
        title: "UPSC CSE Complete Course",
        description: "Comprehensive preparation for Prelims, Mains, and Interview with complete syllabus coverage.",
        duration: "18 months",
        students: "32K+",
        rating: 4.9,
        price: "₹24,999",
        originalPrice: "₹49,999",
        features: ["Complete GS + Optional", "Answer Writing Practice", "Mock Interviews", "Personal Mentorship"],
      },
      {
        title: "UPSC Prelims Crash Course",
        description: "Intensive preparation for UPSC Prelims with focus on MCQ practice and revision.",
        duration: "3 months",
        students: "18K+",
        rating: 4.8,
        price: "₹9,999",
        originalPrice: "₹19,999",
        features: ["Daily MCQ Practice", "PYQ Analysis", "Current Affairs", "Test Series"],
      },
    ],
    mockTests: [
      { title: "UPSC Prelims Full Test", questions: 100, duration: "2 hours", attempts: "12K+", free: false },
      { title: "Current Affairs Monthly", questions: 50, duration: "1 hour", attempts: "25K+", free: true },
      { title: "CSAT Practice Test", questions: 80, duration: "2 hours", attempts: "8K+", free: false },
      { title: "Polity Quick Test", questions: 30, duration: "30 min", attempts: "15K+", free: true },
    ],
    upcomingExams: [
      { name: "UPSC CSE Prelims 2026", date: "May 25, 2026" },
      { name: "UPSC CDS I 2026", date: "April 14, 2026" },
      { name: "UPSC NDA I 2026", date: "April 20, 2026" },
    ],
  },
  ssc: {
    name: "SSC",
    fullName: "Staff Selection Commission",
    description: "Master SSC CGL, CHSL, MTS and other SSC exams with our comprehensive test series and study materials.",
    heroImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop",
    stats: [
      { label: "Students Enrolled", value: "60K+" },
      { label: "Success Rate", value: "89%" },
      { label: "Mock Tests", value: "800+" },
      { label: "Video Hours", value: "1500+" },
    ],
    courses: [
      {
        title: "SSC CGL Complete",
        description: "Complete preparation for SSC CGL Tier I, II, III & IV with all subjects covered.",
        duration: "8 months",
        students: "28K+",
        rating: 4.8,
        price: "₹7,999",
        originalPrice: "₹15,999",
        features: ["All Tiers Covered", "Previous Year Papers", "Speed Tests", "Interview Prep"],
      },
      {
        title: "SSC CHSL Course",
        description: "Focused preparation for SSC CHSL with typing practice and skill development.",
        duration: "6 months",
        students: "22K+",
        rating: 4.7,
        price: "₹4,999",
        originalPrice: "₹9,999",
        features: ["Typing Practice", "Descriptive Writing", "Mock Tests", "Doubt Support"],
      },
    ],
    mockTests: [
      { title: "SSC CGL Tier I Mock", questions: 100, duration: "60 min", attempts: "35K+", free: false },
      { title: "Quantitative Aptitude", questions: 25, duration: "20 min", attempts: "42K+", free: true },
      { title: "English Language", questions: 25, duration: "20 min", attempts: "38K+", free: true },
      { title: "General Awareness", questions: 25, duration: "15 min", attempts: "30K+", free: true },
    ],
    upcomingExams: [
      { name: "SSC CGL 2026", date: "June 2026" },
      { name: "SSC CHSL 2026", date: "July 2026" },
      { name: "SSC MTS 2026", date: "August 2026" },
    ],
  },
  banking: {
    name: "Banking",
    fullName: "Bank & Insurance Exams",
    description: "Crack SBI, IBPS, RBI and insurance exams with our expert-designed courses and extensive mock test series.",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    stats: [
      { label: "Students Enrolled", value: "55K+" },
      { label: "Success Rate", value: "88%" },
      { label: "Mock Tests", value: "600+" },
      { label: "Video Hours", value: "1200+" },
    ],
    courses: [
      {
        title: "Bank PO Complete",
        description: "SBI PO, IBPS PO complete preparation with prelims, mains and interview.",
        duration: "10 months",
        students: "25K+",
        rating: 4.9,
        price: "₹8,999",
        originalPrice: "₹17,999",
        features: ["Prelims + Mains", "GD & Interview", "Banking Awareness", "Computer Knowledge"],
      },
      {
        title: "Bank Clerk Course",
        description: "IBPS Clerk, SBI Clerk preparation with focus on speed and accuracy.",
        duration: "6 months",
        students: "30K+",
        rating: 4.8,
        price: "₹4,999",
        originalPrice: "₹9,999",
        features: ["Speed Building", "Mock Tests", "Sectional Tests", "Current Affairs"],
      },
    ],
    mockTests: [
      { title: "SBI PO Prelims Mock", questions: 100, duration: "60 min", attempts: "28K+", free: false },
      { title: "IBPS PO Practice", questions: 100, duration: "60 min", attempts: "32K+", free: false },
      { title: "Reasoning Ability", questions: 35, duration: "25 min", attempts: "45K+", free: true },
      { title: "Banking Awareness", questions: 40, duration: "20 min", attempts: "25K+", free: true },
    ],
    upcomingExams: [
      { name: "SBI PO 2026", date: "January 2026" },
      { name: "IBPS PO 2026", date: "October 2026" },
      { name: "RBI Grade B 2026", date: "March 2026" },
    ],
  },
  railways: {
    name: "Railways",
    fullName: "Railway Recruitment Board",
    description: "Prepare for RRB NTPC, Group D, ALP and other railway exams with our comprehensive study programs.",
    heroImage: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&h=600&fit=crop",
    stats: [
      { label: "Students Enrolled", value: "70K+" },
      { label: "Success Rate", value: "85%" },
      { label: "Mock Tests", value: "400+" },
      { label: "Video Hours", value: "800+" },
    ],
    courses: [
      {
        title: "RRB NTPC Complete",
        description: "Complete CBT 1 & 2 preparation with memory techniques and speed building.",
        duration: "6 months",
        students: "35K+",
        rating: 4.7,
        price: "₹3,999",
        originalPrice: "₹7,999",
        features: ["CBT 1 & 2", "Typing Skills", "Document Verification", "Mock Tests"],
      },
      {
        title: "RRB Group D Course",
        description: "Focused preparation for Group D with physical fitness guidance.",
        duration: "4 months",
        students: "40K+",
        rating: 4.6,
        price: "₹1,999",
        originalPrice: "₹3,999",
        features: ["Complete Syllabus", "Speed Tests", "GK Capsule", "PET Guidance"],
      },
    ],
    mockTests: [
      { title: "RRB NTPC CBT 1", questions: 100, duration: "90 min", attempts: "50K+", free: false },
      { title: "Group D Practice", questions: 100, duration: "90 min", attempts: "45K+", free: false },
      { title: "General Science", questions: 25, duration: "15 min", attempts: "60K+", free: true },
      { title: "Mathematics Basic", questions: 30, duration: "30 min", attempts: "55K+", free: true },
    ],
    upcomingExams: [
      { name: "RRB NTPC 2026", date: "April 2026" },
      { name: "RRB Group D 2026", date: "May 2026" },
      { name: "RRB ALP 2026", date: "July 2026" },
    ],
  },
}

export default function ExamCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params)
  const exam = examData[category] || examData.upsc

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <img 
            src={exam.heroImage} 
            alt={exam.name}
            className="h-full w-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/#courses" 
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Exams
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">{exam.name} Exams</Badge>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {exam.fullName}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {exam.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Video className="h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {exam.stats.map((stat) => (
                <Card key={stat.label} className="border-border/50 text-center">
                  <CardContent className="p-6">
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">Popular Courses</h2>
              <p className="mt-2 text-muted-foreground">Expert-designed courses for {exam.name} preparation</p>
            </div>
            <Button variant="ghost" className="gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {exam.courses.map((course) => (
              <Card key={course.title} className="overflow-hidden border-border/50 transition-all hover:shadow-xl">
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{course.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{course.description}</p>
                    </div>
                    <Badge variant="secondary">{course.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="mb-6 space-y-2">
                    {course.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" /> {course.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {course.rating}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-6">
                  <div>
                    <span className="text-2xl font-bold text-foreground">{course.price}</span>
                    <span className="ml-2 text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mock Tests Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">Mock Tests</h2>
              <p className="mt-2 text-muted-foreground">Practice with exam-pattern tests</p>
            </div>
            <Button variant="ghost" className="gap-2">
              View All Tests <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {exam.mockTests.map((test) => (
              <Card key={test.title} className="border-border/50 transition-all hover:border-primary/30 hover:shadow-lg">
                <CardContent className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <FileText className="h-8 w-8 text-primary" />
                    {test.free ? (
                      <Badge className="bg-green-500/10 text-green-600">Free</Badge>
                    ) : (
                      <Badge variant="secondary">Pro</Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground">{test.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>{test.questions} Questions</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {test.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{test.attempts} attempts</p>
                </CardContent>
                <CardFooter className="border-t p-4">
                  <Button variant={test.free ? "default" : "outline"} className="w-full" size="sm">
                    {test.free ? "Start Free Test" : "Unlock Test"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Exams */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">Upcoming Exams</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {exam.upcomingExams.map((upcomingExam) => (
              <Card key={upcomingExam.name} className="border-border/50">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{upcomingExam.name}</h3>
                    <p className="text-sm text-muted-foreground">{upcomingExam.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground">
            Ready to Start Your {exam.name} Preparation?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Join thousands of successful aspirants. Start with our free trial today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/#pricing">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
