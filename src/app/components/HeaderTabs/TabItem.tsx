import * as Tabs from '@radix-ui/react-tabs'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export interface TabsItemsProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected }: TabsItemsProps) {
  const router = useRouter()

  function RouteTo() {
    router.push(`/${value}`)
  }

  return (
    <Tabs.Trigger value={value}>
      <span onClick={() => RouteTo()}>{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className='className="absolute left-0 right-0 h-0.5 bg-zinc-200  -bottom-px'
        />
      )}
    </Tabs.Trigger>
  )
}
