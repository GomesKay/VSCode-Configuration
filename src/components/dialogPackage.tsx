import { SquareTerminal } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { Item } from "@/data/items"
import { cn } from "@/lib/utils"

import { CopyIcon } from "./copyIcon"

interface DialogPackageProps {
  selectedItem: Item
  className?: string
}

export function DialogPackage({ selectedItem, className }: DialogPackageProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <SquareTerminal
          size={18}
          className={cn(
            "light:text-slate-500 cursor-pointer text-slate-400",
            className,
          )}
        />
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Instalação de pacotes</DialogTitle>

        <div className="flex flex-col gap-4 rounded-xl border-2 border-slate-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-slate-200">
              {selectedItem.icon}
              {selectedItem.name}
            </div>

            <CopyIcon content={selectedItem.libs ?? ""} />
          </div>

          <p className="text-slate-200">{selectedItem.libs}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
