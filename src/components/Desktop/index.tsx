import {
  ChevronDown,
  FilePlus,
  FileX,
  FolderPlus,
  Moon,
  Settings,
  Sun,
  X,
} from "lucide-react"
import { useState } from "react"

import { FileTree } from "@/components/fileTree"
import { items } from "@/data/items"
import { useTheme } from "@/hooks/useTheme"
import { cn } from "@/lib/utils"

import { CopyIcon } from "../copyIcon"
import { DialogPackage } from "../dialogPackage"

export function Desktop() {
  const { isLight, toggleTheme } = useTheme()

  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)

  const ThemeIcon = isLight ? Sun : Moon
  const selectedItem = selectedItemId ? items[selectedItemId] : null

  return (
    <div
      className={cn(
        "light:bg-slate-50 min-h-screen bg-slate-950 text-slate-200",
        isLight && "light",
      )}
    >
      <div className="ctn flex min-w-0">
        <aside className="light:border-slate-200 light:bg-white flex w-full max-w-xs flex-col justify-between gap-4 border-r border-slate-800 bg-slate-900 px-6 py-6">
          <div className="flex flex-col gap-4">
            <div className="font-headline light:text-slate-800 flex justify-between text-slate-200">
              <h2>Explorer</h2>

              <span className="light:text-slate-500 flex gap-2 text-slate-400">
                <FilePlus size={20} />
                <FolderPlus size={20} />
              </span>
            </div>

            <span className="light:text-slate-500 flex gap-2 text-slate-400">
              <ChevronDown size={20} />

              <h2 className="font-headline text-sm uppercase">My-Config</h2>
            </span>

            <FileTree
              selectedItemId={selectedItemId}
              setSelectedItemId={setSelectedItemId}
            />
          </div>

          <div className="light:text-slate-500 flex items-center gap-4 text-slate-400">
            <Settings size={24} className="cursor-pointer" />

            <ThemeIcon
              size={24}
              className="light:text-yellow-400 cursor-pointer text-indigo-400"
              onClick={toggleTheme}
            />
          </div>
        </aside>

        <main className="font-body flex h-screen w-full min-w-0 items-center justify-center">
          {selectedItem ? (
            <div className="light:text-slate-800 flex w-full max-w-2xl min-w-0 flex-col gap-4 px-6 text-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {selectedItem.icon}
                  <h1 className="font-headline text-lg font-bold">
                    {selectedItem.name}
                  </h1>
                  <X
                    size={14}
                    className="light:text-slate-400 cursor-pointer text-slate-500"
                    onClick={() => setSelectedItemId(null)}
                  />
                </div>

                <div className="flex gap-4">
                  <DialogPackage selectedItem={selectedItem} />

                  <CopyIcon content={selectedItem.content ?? ""} />
                </div>
              </div>

              <pre className="light:bg-white light:border-slate-200 light:scrollbar-thumb-slate-300 max-h-120 w-full min-w-0 scrollbar-thumb-indigo-300 overflow-auto rounded-xl border-2 border-slate-800 bg-slate-900 p-4 text-xs">
                <code>
                  {selectedItem.content ?? "// sem conteúdo disponível"}
                </code>
              </pre>
            </div>
          ) : (
            <div className="light:text-slate-800 flex flex-col items-center gap-4 text-slate-200">
              <div className="light:bg-white light:border-slate-200 light:shadow-indigo-300/40 rounded-xl border-2 border-slate-800 bg-slate-900 p-8 shadow-lg/40 shadow-indigo-500/40">
                <FileX
                  size={26}
                  className="light:text-slate-400 text-slate-500"
                />
              </div>

              <h1 className="font-headline text-xl font-bold">
                Nenhum arquivo selecionado
              </h1>

              <p className="light:text-slate-500 text-xs text-slate-400">
                Escolha um arquivo na árvore para começar a editar sua
                configuração.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
