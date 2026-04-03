import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-svh">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
