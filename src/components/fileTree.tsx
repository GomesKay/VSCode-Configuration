import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core"
import { useTree } from "@headless-tree/react"
import type { Dispatch, SetStateAction } from "react"

import { Tree, TreeItem, TreeItemLabel } from "@/components/reui/tree"
import type { Item } from "@/data/items"
import { items } from "@/data/items"
import { cn } from "@/lib/utils"

interface FileTreeProps {
  selectedItemId: string | null
  setSelectedItemId: Dispatch<SetStateAction<string | null>>
}

export function FileTree({ selectedItemId, setSelectedItemId }: FileTreeProps) {
  const indent = 20
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

  return (
    <Tree
      indent={indent}
      tree={tree}
      className="scrollbar-transparent h-115 scrollbar-thumb-slate-500 overflow-y-auto"
    >
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
  )
}
