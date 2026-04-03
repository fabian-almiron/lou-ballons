/** Shared motion presets — springy, celebratory feel */
export const playfulSpring = {
  type: "spring" as const,
  stiffness: 320,
  damping: 22,
}

export const gentleSpring = {
  type: "spring" as const,
  stiffness: 120,
  damping: 26,
}

export const bouncySpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 18,
}

export const viewportOnce = {
  once: true as const,
  margin: "-64px" as const,
}
