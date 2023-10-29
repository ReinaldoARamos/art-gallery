import { UseRedirect } from '@/app/hooks/useRedirect'
import * as Tabs from '@radix-ui/react-tabs'

import { motion } from 'framer-motion'

export interface TabsItemsProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected }: TabsItemsProps) {
  const redirectTo = UseRedirect()

  return (
    <Tabs.Trigger value={value} onClick={() => redirectTo(`/${value}`)}>
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
