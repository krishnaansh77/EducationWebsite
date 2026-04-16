import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mt-6 rounded-3xl border border-border/60 bg-card p-8 shadow-xl">
          <h1 className="font-serif text-4xl font-bold text-foreground">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">
            These terms govern your access to ExamWaliSite, including practice content, study tools, analytics,
            and mentorship features.
          </p>
          <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
            <p>You agree to use the platform for lawful educational purposes and to keep your account information accurate.</p>
            <p>Course materials, tests, and downloadable resources are for personal learning use and may not be redistributed without permission.</p>
            <p>We may update product features, pricing, and policies over time. Continued use of the platform means you accept those updates.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
