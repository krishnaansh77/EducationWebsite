import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AnimatedStats } from "@/components/animated-stats"
import { FeaturesSection } from "@/components/features-section"
import { CoursesSection } from "@/components/courses-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingAction } from "@/components/floating-action"
import { GrowthCompanion } from "@/components/growth-companion"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AnimatedStats />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <GrowthCompanion />
      <FloatingAction />
    </main>
  )
}
