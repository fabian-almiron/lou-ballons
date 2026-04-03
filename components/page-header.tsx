import Image from "next/image"

type PageHeaderProps = {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="relative border-b border-border/60">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <Image
          src="/images/hero-bg.avif"
          alt=""
          fill
          className="scale-105 object-cover object-center opacity-35 blur-sm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/88" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-12 text-center lg:px-8 lg:pt-32 lg:pb-16">
        <h1 className="font-serif text-foreground text-4xl tracking-tight md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  )
}
