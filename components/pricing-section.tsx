"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Free",
    description: "Perfect for exploring our platform",
    price: "₹0",
    period: "forever",
    features: [
      "Access to 100+ free mock tests",
      "Basic study materials",
      "Daily current affairs",
      "Community forum access",
      "Mobile app access",
    ],
    notIncluded: [
      "Video courses",
      "Mentorship sessions",
      "Detailed analytics",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    description: "Everything you need to succeed",
    price: "₹999",
    period: "per month",
    yearlyPrice: "₹8,999/year",
    features: [
      "All Free features",
      "Unlimited mock tests",
      "Complete video courses",
      "Detailed performance analytics",
      "24/7 doubt support",
      "Monthly current affairs PDF",
      "Test series for all exams",
      "Priority email support",
    ],
    notIncluded: [
      "1-on-1 mentorship",
    ],
    cta: "Start 7-Day Free Trial",
    popular: true,
  },
  {
    name: "Ultimate",
    description: "Premium support for serious aspirants",
    price: "₹2,499",
    period: "per month",
    yearlyPrice: "₹24,999/year",
    features: [
      "All Pro features",
      "1-on-1 mentorship sessions",
      "Personalized study plan",
      "Mock interview practice",
      "Answer writing evaluation",
      "Direct mentor access via chat",
      "Career guidance sessions",
      "Exclusive webinars",
    ],
    notIncluded: [],
    cta: "Start 7-Day Free Trial",
    popular: false,
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)
  
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Simple Pricing
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">Invest in Your Future</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your preparation needs. All plans come with a 
            7-day money-back guarantee.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="relative h-6 w-11 rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            role="switch"
            aria-checked={isYearly}
          >
            <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${isYearly ? 'left-6' : 'left-1'}`} />
          </button>
          <span className={`text-sm transition-colors ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
            Yearly <Badge variant="secondary" className="ml-1 bg-accent/10 text-accent">Save 25%</Badge>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? "border-primary shadow-xl shadow-primary/10 scale-105 z-10" 
                  : "border-border/50 hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -right-12 top-6 rotate-45 bg-primary px-12 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="p-6 pb-0">
                <div className="flex items-center gap-2">
                  {plan.popular && <Sparkles className="h-5 w-5 text-primary" />}
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="p-6">
                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                {plan.yearlyPrice && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    or {plan.yearlyPrice} (billed annually)
                  </p>
                )}

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 opacity-50">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-muted-foreground">
                        —
                      </span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Link href="/sign-up" className="w-full">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-primary hover:bg-primary/90" 
                        : "bg-foreground hover:bg-foreground/90"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm">SSL Secured</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">7-Day Money Back</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="text-sm">All Payment Methods</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="text-sm">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
