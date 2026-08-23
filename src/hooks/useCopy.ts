import { useState } from "react"

export function useCopy() {
  const [copied, setCopied] = useState(false)

  async function copy(content: string) {
    await navigator.clipboard.writeText(content)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 6000)
  }

  return {
    copied,
    copy,
  }
}
