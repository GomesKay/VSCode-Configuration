import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core"
import { useTree } from "@headless-tree/react"
import {
  Check,
  ChevronDown,
  Copy,
  FilePlus,
  FileX,
  FolderPlus,
  Moon,
  ScrollText,
  Settings,
  Sun,
  X,
} from "lucide-react"
import { useState } from "react"

import { Tree, TreeItem, TreeItemLabel } from "@/components/reui/tree"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Item } from "@/data/items"
import { items } from "@/data/items"
import { cn } from "@/lib/utils"

import { itemsAccordion } from "./data/accordion-items"
import { useCopy } from "./hooks/useCopy"
import { useTheme } from "./hooks/useTheme"

const indent = 20

export function App() {
  const { copied, copy } = useCopy()
  const { isLight, toggleTheme } = useTheme()

  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)

  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["src", "package"],
    },
    indent,
    rootItemId: "crm",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  })

  const isMobile = window.innerWidth < 768
  const ThemeIcon = isLight ? Sun : Moon
  const CopyIcon = copied ? Check : Copy
  const selectedItem = selectedItemId ? items[selectedItemId] : null

  return (
    <>
      {isMobile ? (
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

            <Accordion
              multiple={false}
              className="flex flex-col gap-3 border-0"
            >
              {itemsAccordion.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="light:border-slate-200 light:bg-white overflow-hidden rounded-xl border-2 border-slate-800 bg-slate-900"
                >
                  <AccordionTrigger className="light:text-slate-700 flex w-full items-center justify-between px-4 py-3 text-slate-200 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="light:bg-slate-100 flex size-8 items-center justify-center rounded-lg bg-slate-800">
                        {item.icon}
                      </div>
                      <span className="font-headline text-sm">
                        {item.trigger}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="light:border-slate-200 border-t border-slate-800 px-0 py-0">
                    <div className="relative">
                      <CopyIcon
                        size={14}
                        className={cn(
                          "light:text-slate-500 absolute top-3 right-3 cursor-pointer text-slate-400",
                          copied && "light:text-green-600 text-green-400",
                        )}
                        onClick={() => copy(item.content ?? "")}
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
      ) : (
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

                <Tree indent={indent} tree={tree}>
                  {tree.getItems().map((item) => {
                    return (
                      <TreeItem key={item.getId()} item={item}>
                        <TreeItemLabel
                          onClick={() => {
                            if (!item.isFolder()) {
                              setSelectedItemId(item.getId())
                            }
                          }}
                          className={cn(
                            "light:text-slate-700 light:hover:bg-slate-100 bg-transparent text-slate-300 hover:bg-slate-800",
                            selectedItemId === item.getId() &&
                              "light:bg-slate-100 bg-slate-800",
                          )}
                        >
                          <span className="flex items-center gap-2">
                            {item.getItemData().icon}
                            {item.getItemName()}
                          </span>
                        </TreeItemLabel>
                      </TreeItem>
                    )
                  })}
                </Tree>
              </div>

              <div className="light:text-slate-500 flex items-center gap-4 text-slate-400">
                <Settings size={24} className="cursor-pointer" />

                <ScrollText size={24} className="cursor-pointer" />

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

                    <CopyIcon
                      size={14}
                      className={cn(
                        "light:text-slate-500 cursor-pointer text-slate-400",
                        copied && "light:text-green-600 text-green-400",
                      )}
                      onClick={() => copy(selectedItem.content ?? "")}
                    />
                  </div>

                  <pre className="light:bg-white light:border-slate-200 light:scrollbar-thumb-slate-300 max-h-120 w-full min-w-0 scrollbar-thumb-indigo-300 overflow-auto rounded-xl border-2 border-slate-800 bg-slate-900 p-4 text-xs">
                    <code>
                      {selectedItem.content ?? "// sem conteúdo disponível"}
                    </code>
                  </pre>
                </div>
              ) : (
                <div className="light:text-slate-800 flex flex-col items-center gap-4 text-slate-200">
                  <div className="light:bg-white light:border-slate-200 light:shadow-indigo-300/40 rounded-2xl border-2 border-slate-800 bg-slate-900 p-8 shadow-lg/40 shadow-indigo-500/40">
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
      )}
    </>
  )
}
