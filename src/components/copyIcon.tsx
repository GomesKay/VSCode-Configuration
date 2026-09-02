import { Check, Copy } from "lucide-react"

import { useCopy } from "@/hooks/useCopy"
import { cn } from "@/lib/utils"

interface CopyIconProps {
  content: string
  className?: string
}

export function CopyIcon({ content, className }: CopyIconProps) {
  const { copied, copy } = useCopy()

  const Icon = copied ? Check : Copy

  return (
    <Icon
      size={18}
      strokeWidth={copied ? 3 : 2}
      pointerEvents={copied ? "none" : "auto"}
      className={cn(
        "light:text-slate-500 cursor-pointer text-slate-400",
        copied && "light:text-green-600 text-green-400",
        className,
      )}
      onClick={() => copy(content ?? "")}
    />
  )
}
