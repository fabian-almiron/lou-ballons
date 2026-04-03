import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

/** Swap these paths when final assets are ready. */
const PH = {
  a: "/images/gallery-1.jpg",
  b: "/images/gallery-2.jpg",
  c: "/images/gallery-3.jpg",
  d: "/images/gallery-4.jpg",
  e: "/images/birthday-parties.avif",
  f: "/images/weddings.avif",
  g: "/images/corporate.avif",
  h: "/images/holidays.avif",
} as const

const offeringsSectionTitle =
  "font-serif mb-10 text-center text-[1.75rem] font-normal leading-[1.2] tracking-tight sm:mb-12 sm:text-3xl md:text-4xl lg:text-[2.65rem] lg:leading-[1.18]"

type OfferingCard = {
  title: string
  priceLine: string
  imageSrc: string
  imageAlt: string
}

function OfferingCard({ item }: { item: OfferingCard }) {
  return (
    <div className="relative aspect-3/4 w-full overflow-hidden rounded-none bg-muted">
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent"
        aria-hidden
      />
      <div className="absolute right-0 bottom-0 left-0 p-4 text-white md:p-6">
        <p className="font-serif text-base font-semibold leading-snug md:text-lg">
          {item.title}
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-white/85">{item.priceLine}</p>
      </div>
    </div>
  )
}

function OfferingsCta({
  href,
  label,
  variant,
}: {
  href: string
  label: string
  variant: "dark" | "green"
}) {
  return (
    <div className="mt-10 flex justify-center md:mt-12">
      <Button
        asChild
        size="lg"
        variant={variant === "green" ? "green" : "default"}
        className={
          variant === "green"
            ? "main-btn green-btn rounded-md px-10"
            : "main-btn black-btn rounded-md px-10"
        }
      >
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  )
}

const grabAndGoItems: OfferingCard[] = [
  {
    title: "Grab N' Go Garland",
    priceLine: "Starting at $80+",
    imageSrc: PH.a,
    imageAlt: "Placeholder — Grab N' Go garland",
  },
  {
    title: "Helium Balloons",
    priceLine: "Starting at $45",
    imageSrc: PH.b,
    imageAlt: "Placeholder — helium balloon bouquet",
  },
  {
    title: "Custom Jumbo Balloon",
    priceLine: "$80",
    imageSrc: PH.c,
    imageAlt: "Placeholder — custom jumbo balloon",
  },
  {
    title: "Standard Pipe & Drape",
    priceLine: "Starting at $100",
    imageSrc: PH.d,
    imageAlt: "Placeholder — pipe and drape backdrop",
  },
]

const garlandAddonItems: OfferingCard[] = [
  {
    title: "Foil Accessories starting at",
    priceLine: "$50 (Stylist will recommend an amount for your install)",
    imageSrc: PH.e,
    imageAlt: "Placeholder — foil balloon accessories",
  },
  {
    title: "Tissue Tassels",
    priceLine: "$15 / set of 3",
    imageSrc: PH.f,
    imageAlt: "Placeholder — tissue tassels on balloons",
  },
  {
    title: "Vinyl Customization starting at",
    priceLine: "$10",
    imageSrc: PH.g,
    imageAlt: "Placeholder — vinyl on balloons",
  },
]

const propRentalItems: OfferingCard[] = [
  {
    title: "Arch Backdrop",
    priceLine: "$55+",
    imageSrc: PH.h,
    imageAlt: "Placeholder — arch backdrop rental",
  },
  {
    title: "Gold Ring",
    priceLine: "$75+",
    imageSrc: PH.a,
    imageAlt: "Placeholder — gold ring backdrop",
  },
  {
    title: "Gold Square",
    priceLine: "$75+",
    imageSrc: PH.b,
    imageAlt: "Placeholder — gold square frame",
  },
  {
    title: "Grid Wall",
    priceLine: "$75+",
    imageSrc: PH.c,
    imageAlt: "Placeholder — grid wall rental",
  },
]

export function GrabAndGoSection() {
  return (
    <section
      id="grab-and-go"
      className="bg-[#9ba08d] py-16 lg:py-24"
      aria-labelledby="grab-and-go-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="grab-and-go-heading"
          className={`${offeringsSectionTitle} text-white`}
        >
          Grab &amp; Go
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {grabAndGoItems.map((item) => (
            <OfferingCard key={item.title} item={item} />
          ))}
        </div>
        <OfferingsCta href="/contact" label="Book Your Balloons Now" variant="dark" />
      </div>
    </section>
  )
}

export function GarlandAddonsSection() {
  return (
    <section
      id="garland-add-ons"
      className="bg-[#f0ebe3] py-16 lg:py-24"
      aria-labelledby="garland-add-ons-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="garland-add-ons-heading"
          className={`${offeringsSectionTitle} text-foreground`}
        >
          Garland Add-ons
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {garlandAddonItems.map((item) => (
            <OfferingCard key={item.title} item={item} />
          ))}
        </div>
        <OfferingsCta href="/contact" label="Book Your Balloons Now" variant="green" />
      </div>
    </section>
  )
}

export function PropRentalsSection() {
  return (
    <section
      id="prop-rentals"
      className="bg-[#9ba08d] py-16 lg:py-24"
      aria-labelledby="prop-rentals-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="prop-rentals-heading"
          className={`${offeringsSectionTitle} text-white`}
        >
          Prop Rentals
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {propRentalItems.map((item) => (
            <OfferingCard key={item.title} item={item} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm leading-relaxed text-white/85 md:mt-10">
          (Final rental price is based on event location)
        </p>
        <OfferingsCta href="/contact" label="Book Your Balloons Now" variant="dark" />
      </div>
    </section>
  )
}
