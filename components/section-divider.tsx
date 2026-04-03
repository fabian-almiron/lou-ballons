import { cn } from "@/lib/utils"

export type SectionDividerTone =
  | "light"
  | "cream"
  | "intro-green"
  | "white"
  | "dark"
  | "olive"

export type SectionDividerAlign = "left" | "center" | "right"

export type SectionDividerBleed = "none" | "sm" | "md" | "lg"

/** `section` = tall between bands; `inline` = shorter, for use inside a text column */
export type SectionDividerScope = "section" | "inline"

export type SectionDividerSize = "default" | "compact"

const toneLine: Record<SectionDividerTone, string> = {
  light: "bg-[#878771]",
  cream: "bg-[#878771]",
  "intro-green": "bg-white/50",
  white: "bg-[#878771]",
  dark: "bg-[#f5f0e8]/35",
  olive: "bg-white/55",
}

const alignRow: Record<SectionDividerAlign, string> = {
  left: "justify-start px-6 sm:px-10 lg:px-16 xl:px-24",
  center: "justify-center px-6",
  right: "justify-end px-6 sm:px-10 lg:px-16 xl:px-24",
}

const bleedRow: Record<SectionDividerBleed, string> = {
  none: "py-0",
  sm: "-my-6 py-0 sm:-my-10",
  md: "-my-8 py-0 sm:-my-14 lg:-my-20",
  lg: "-my-10 py-0 sm:-my-16 lg:-my-24",
}

const sectionHeights: Record<SectionDividerSize, string> = {
  default: "h-[4.75rem] sm:h-24 md:h-28 lg:h-32",
  compact: "h-11 sm:h-14 md:h-16 lg:h-20",
}

const inlineHeights: Record<SectionDividerSize, string> = {
  default: "h-6 sm:h-8",
  compact: "h-5 sm:h-6",
}

export interface SectionDividerProps {
  tone?: SectionDividerTone
  align?: SectionDividerAlign
  bleed?: SectionDividerBleed
  scope?: SectionDividerScope
  size?: SectionDividerSize
  className?: string
}

export function SectionDivider({
  tone = "light",
  align = "center",
  bleed = "md",
  scope = "section",
  size = "default",
  className,
}: SectionDividerProps) {
  const line = toneLine[tone]

  const isInline = scope === "inline"
  const effectiveBleed: SectionDividerBleed = isInline ? "none" : bleed

  return (
    <div
      role="separator"
      className={cn(
        "pointer-events-none flex w-full",
        isInline ? "justify-start py-0" : cn(alignRow[align], bleedRow[effectiveBleed]),
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "w-[2px] shrink-0 opacity-90",
          line,
          isInline ? inlineHeights[size] : sectionHeights[size],
        )}
      />
    </div>
  )
}
