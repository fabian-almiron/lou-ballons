"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Handbag, Instagram, Menu, User, X } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { bouncySpring, gentleSpring, playfulSpring } from "@/lib/motion"

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-story", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const

function navPathActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href
}

function navLinkClass(active: boolean) {
  return [
    "text-sm font-medium tracking-wide transition-colors",
    active
      ? "text-primary"
      : "text-muted-foreground hover:text-foreground",
  ].join(" ")
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { toggleCart, totalItems } = useCart()
  const reduceMotion = useReducedMotion()
  const pathname = usePathname()

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-white"
      initial={reduceMotion ? false : { y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={playfulSpring}
    >
      <nav className="mx-auto max-w-full px-6 lg:px-20">
        <div className="flex h-20 items-center gap-4">
          <motion.div
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={bouncySpring}
            className="shrink-0"
          >
            <Link
              href="/"
              className="relative block h-12 w-[280px] max-w-[min(280px,calc(100vw-10rem))] md:max-w-[280px]"
            >
              <Image
                src="/images/logo.avif"
                alt="Lou Balloons"
                fill
                className="object-contain object-left"
                sizes="280px"
                priority
              />
            </Link>
          </motion.div>

          {/* Center: desktop nav */}
          <div className="hidden min-w-0 flex-1 justify-center md:flex">
            <div className="flex items-center gap-5 lg:gap-8">
              {NAV_ITEMS.map(({ href, label }) => (
                <motion.div
                  key={href}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                >
                  <Link
                    href={href}
                    className={navLinkClass(navPathActive(pathname, href))}
                    scroll
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: utilities */}
          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
            <motion.button
              type="button"
              onClick={toggleCart}
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm"
              aria-label={`Open cart, ${totalItems} items`}
              whileHover={reduceMotion ? undefined : { rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.45 }}
              whileTap={reduceMotion ? undefined : { scale: 0.94 }}
            >
              <Handbag className="h-5 w-5" strokeWidth={2} aria-hidden />
              <span className="pointer-events-none absolute -top-1 -right-1 flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold tabular-nums text-primary leading-none">
                {totalItems}
              </span>
            </motion.button>

            <motion.a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-foreground hover:text-primary md:inline-flex"
              aria-label="Instagram"
              whileHover={reduceMotion ? undefined : { scale: 1.08 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
            >
              <Instagram className="h-5 w-5" strokeWidth={1.75} />
            </motion.a>

            <motion.div
              whileHover={reduceMotion ? undefined : { y: -1 }}
              className="hidden md:block"
            >
              <Link
                href="/login"
                className="text-primary flex items-center gap-2 text-sm font-semibold tracking-tight hover:text-primary/85"
              >
                <User className="h-5 w-5" strokeWidth={2} />
                Log In
              </Link>
            </motion.div>

            <motion.button
              type="button"
              className="p-2 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={reduceMotion ? undefined : { scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="overflow-hidden border-t border-border/50 md:hidden"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={gentleSpring}
            >
              <motion.div
                className="flex flex-col gap-4 py-4"
                initial={reduceMotion ? false : { y: -8 }}
                animate={{ y: 0 }}
                transition={playfulSpring}
              >
                {NAV_ITEMS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={navLinkClass(navPathActive(pathname, href))}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
                <Link
                  href="/login"
                  className="text-primary flex items-center gap-2 text-sm font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  Log In
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
