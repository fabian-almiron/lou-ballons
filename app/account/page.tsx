import type { Metadata } from "next"
import Link from "next/link"
import {
  CalendarDays,
  ClipboardList,
  Heart,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Settings,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteChrome } from "@/components/site-chrome"

export const metadata: Metadata = {
  title: "My Account | Lou Balloons",
  description: "Manage your Lou Balloons account, past orders, and event inquiries.",
}

const MOCK_ORDERS = [
  {
    id: "LB-2024-001",
    event: "Birthday Garland",
    date: "March 15, 2025",
    status: "Completed",
    statusColor: "text-primary bg-primary/10",
  },
  {
    id: "LB-2024-002",
    event: "Corporate Arch Install",
    date: "April 2, 2025",
    status: "Upcoming",
    statusColor: "text-amber-700 bg-amber-100",
  },
]

const QUICK_LINKS = [
  { icon: ClipboardList, label: "My Orders", href: "#orders" },
  { icon: CalendarDays, label: "Book an Event", href: "/contact" },
  { icon: Heart, label: "Saved Looks", href: "/gallery" },
  { icon: Settings, label: "Account Settings", href: "#settings" },
]

export default function AccountPage() {
  return (
    <SiteChrome>
      {/* Page header band */}
      <div className="border-b border-border/60 bg-background pt-28 pb-10 lg:pt-32 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <User className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <div>
                <h1 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
                  My Account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Welcome back, McKenzie
                </p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="main-btn bordered-dark rounded-md self-start sm:self-auto"
            >
              <Link href="/login" className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">

          {/* ── Left column: profile + quick links ── */}
          <aside className="space-y-8">
            {/* Profile card */}
            <div className="border border-border/60 bg-card p-6">
              <h2 className="font-serif mb-5 text-lg tracking-tight text-foreground">
                Profile
              </h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <User className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                  <span>McKenzie Lou</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                  <span>mckenzie@example.com</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                  <span>(801) 555-0100</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                  <span>Provo, UT</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button
                  asChild
                  size="sm"
                  className="main-btn black-btn rounded-md"
                >
                  <Link href="#settings">Edit Profile</Link>
                </Button>
              </div>
            </div>

            {/* Quick links */}
            <div className="border border-border/60 bg-card p-6">
              <h2 className="font-serif mb-5 text-lg tracking-tight text-foreground">
                Quick Links
              </h2>
              <ul className="space-y-1">
                {QUICK_LINKS.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="flex items-center gap-3 rounded-sm px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ── Right column: orders + CTA ── */}
          <main className="space-y-10">
            {/* Orders */}
            <section id="orders">
              <h2 className="font-serif mb-6 text-xl tracking-tight text-foreground md:text-2xl">
                My Orders &amp; Inquiries
              </h2>

              {MOCK_ORDERS.length === 0 ? (
                <div className="border border-border/60 bg-card px-6 py-12 text-center">
                  <ClipboardList className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
                  <p className="text-muted-foreground">No orders yet.</p>
                  <Button asChild size="lg" className="main-btn green-btn rounded-md mt-6">
                    <Link href="/contact">Book Your First Event</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {MOCK_ORDERS.map((order) => (
                    <div
                      key={order.id}
                      className="flex flex-col gap-3 border border-border/60 bg-card p-5 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="font-medium text-foreground">{order.event}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {order.id} · {order.date}
                        </p>
                      </div>
                      <span
                        className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${order.statusColor}`}
                      >
                        {order.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Book another event CTA */}
            <section className="bg-primary/8 border border-primary/20 px-6 py-8">
              <h3 className="font-serif mb-2 text-xl tracking-tight text-foreground">
                Ready for your next event?
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Tell us about your date, venue, and vision — we&apos;ll take it from there.
              </p>
              <Button asChild size="lg" className="main-btn green-btn rounded-md">
                <Link href="/contact">Book an Event</Link>
              </Button>
            </section>
          </main>
        </div>
      </div>
    </SiteChrome>
  )
}
