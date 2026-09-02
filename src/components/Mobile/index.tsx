import { Moon, Sun } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { itemsAccordion } from "@/data/accordion-items"
import { useTheme } from "@/hooks/useTheme"
import { cn } from "@/lib/utils"

import { CopyIcon } from "../copyIcon"
import { DialogPackage } from "../dialogPackage"

export function Mobile() {
  const { isLight, toggleTheme } = useTheme()

  const ThemeIcon = isLight ? Sun : Moon

  return (
    <div
      className={cn(
        "light:bg-slate-50 min-h-screen bg-slate-950 text-slate-200",
        isLight && "light",
      )}
    >
      <div className="ctn flex min-w-0 flex-col gap-6 px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-headline light:text-slate-800 text-xl font-bold text-slate-200">
              VSCode Configuration
            </h1>
            <p className="light:text-slate-500 text-xs text-slate-400">
              Explorer &middot; My-Config
            </p>
          </div>

          <ThemeIcon
            size={22}
            className="light:text-yellow-400 cursor-pointer text-indigo-400"
            onClick={toggleTheme}
          />
        </div>

        <Accordion multiple={false} className="flex flex-col gap-3 border-0">
          {itemsAccordion.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="light:border-slate-200 light:bg-white overflow-hidden rounded-xl border-2 border-slate-800 bg-slate-900"
            >
              <AccordionTrigger className="light:text-slate-700 flex w-full items-center justify-between px-4 py-3 text-slate-200 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="light:bg-slate-100 flex size-8 items-center justify-center rounded-xl bg-slate-800">
                    {item.icon}
                  </div>
                  <span className="font-headline text-sm">{item.name}</span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="light:border-slate-200 border-t border-slate-800 px-0 py-0">
                <div className="relative">
                  <DialogPackage
                    selectedItem={item}
                    className="absolute top-4 right-12"
                  />

                  <CopyIcon
                    content={item.content ?? ""}
                    className="absolute top-4 right-4"
                  />

                  <pre className="light:bg-white max-h-80 w-full min-w-0 scrollbar-thumb-indigo-300 overflow-auto p-4 text-xs">
                    <code>{item.content}</code>
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
