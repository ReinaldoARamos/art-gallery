import { UseRedirect } from '@/app/hooks/useRedirect'
import * as Tabs from '@radix-ui/react-tabs'

export interface TabsItemsProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title }: TabsItemsProps) {
  const redirectTo = UseRedirect()

  return (
    <Tabs.Trigger value={value}>
      <span onClick={() => redirectTo(`/${value}`)}>{title}</span>
    </Tabs.Trigger>
  )
}
