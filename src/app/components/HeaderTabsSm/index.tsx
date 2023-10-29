'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItemSm } from './TabItem'
import { useState } from 'react'

export function HeaderTabsSm() {
  const [currentTab, setCurrentTab] = useState('/')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="group flex flex-col gap-10 px-6">
        <TabItemSm value="/" title="Início" />
        <TabItemSm value="gallery" title="Galeria" />
        <TabItemSm value="artists" title="Artistas" />
        <TabItemSm value="about" title="Sobre" />

        <TabItemSm value="art-events" title="Eventos" />
        <TabItemSm value="blog" title="Blog" />
      </Tabs.List>
    </Tabs.Root>
  )
}
