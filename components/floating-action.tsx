"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MessageCircle, X, Phone, Mail, HelpCircle, ArrowUp } from "lucide-react"

export function FloatingAction() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="pointer-events-none fixed right-3 bottom-3 z-40 flex max-w-[calc(100vw-1.5rem)] flex-col items-end gap-2 sm:right-4 sm:bottom-4 md:right-6 md:bottom-6">
      {/* Scroll to Top */}
      <Button
        size="icon"
        variant="secondary"
        onClick={scrollToTop}
        className={`pointer-events-auto h-10 w-10 rounded-full border border-border/80 bg-background/90 shadow-lg backdrop-blur transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>

      {/* Quick Actions */}
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <Link href="tel:+911234567890">
          <Button
            size="sm"
            variant="secondary"
            className="pointer-events-auto h-10 rounded-full border border-border/80 bg-background/95 px-3 shadow-lg backdrop-blur hover:bg-primary hover:text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden md:inline">Call Us</span>
          </Button>
        </Link>
        <Link href="mailto:support@examwalisite.com">
          <Button
            size="sm"
            variant="secondary"
            className="pointer-events-auto h-10 rounded-full border border-border/80 bg-background/95 px-3 shadow-lg backdrop-blur hover:bg-primary hover:text-primary-foreground"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden md:inline">Email</span>
          </Button>
        </Link>
        <Link href="#faq">
          <Button
            size="sm"
            variant="secondary"
            className="pointer-events-auto h-10 rounded-full border border-border/80 bg-background/95 px-3 shadow-lg backdrop-blur hover:bg-primary hover:text-primary-foreground"
            onClick={() => setIsOpen(false)}
          >
            <HelpCircle className="h-4 w-4" />
            <span className="hidden md:inline">FAQs</span>
          </Button>
        </Link>
      </div>

      {/* Main Button */}
      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "pointer-events-auto h-12 w-12 rounded-full border border-primary/20 shadow-2xl transition-all duration-300 hover:scale-105 md:h-14 md:w-14",
          isOpen 
            ? 'bg-foreground hover:bg-foreground/90 rotate-90' 
            : 'bg-primary hover:bg-primary/90'
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform" />
        ) : (
          <MessageCircle className="h-6 w-6 transition-transform" />
        )}
        <span className="sr-only">{isOpen ? 'Close' : 'Open'} quick actions</span>
      </Button>
    </div>
  )
}
