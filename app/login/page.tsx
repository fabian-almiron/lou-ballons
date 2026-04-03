import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16">
      <p className="text-muted-foreground mb-6 text-center text-lg">
        Log in isn&apos;t available yet.
      </p>
      <Link href="/" className="text-primary text-sm font-semibold hover:underline">
        Back to home
      </Link>
    </main>
  )
}
