import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mt-6 rounded-3xl border border-border/60 bg-card p-8 shadow-xl">
          <h1 className="font-serif text-4xl font-bold text-foreground">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">
            We collect only the information needed to provide your learning experience, track progress, and improve recommendations.
          </p>
          <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
            <p>Your name, email, study preferences, and activity history may be used to personalize your dashboard and course suggestions.</p>
            <p>We do not sell your personal data. Analytics are used to improve course quality, performance tracking, and support response times.</p>
            <p>You can contact our support team at any time if you need help updating or removing your account data.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
