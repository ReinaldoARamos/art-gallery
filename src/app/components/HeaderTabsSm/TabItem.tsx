import { UseRedirect } from '@/app/hooks/useRedirect'
import * as Tabs from '@radix-ui/react-tabs'

export interface TabsItemsProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItemSm({ value, title }: TabsItemsProps) {
  const redirectTo = UseRedirect()

  return (
    <Tabs.Trigger value={value}>
      <span
        className="text-zinc-200 text-xl flex  "
        onClick={() => redirectTo(`/${value}`)}
      >
        {title}
      </span>
    </Tabs.Trigger>
  )
}
