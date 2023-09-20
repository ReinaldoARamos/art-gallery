import * as Tabs from '@radix-ui/react-tabs'

import { motion } from 'framer-motion'

export interface TabsItemsProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected }: TabsItemsProps) {
  return (
    <Tabs.Trigger value={value}>
      <span>{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className='className="absolute left-0 right-0 h-0.5 bg-zinc-200  -bottom-px'
        />
      )}
    </Tabs.Trigger>
  )
}
