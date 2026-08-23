import { useState } from "react"

export function useTheme() {
  const [isLight, setIsLight] = useState(false)

  function toggleTheme() {
    setIsLight((current) => !current)
  }

  return {
    isLight,
    toggleTheme,
  }
}
