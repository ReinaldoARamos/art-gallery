'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function HeaderTabsSm() {
  const [currentTab, setCurrentTab] = useState('/')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="group flex gap-8 md:flex sm:flex lg:w-80 sm:items-center sm:w-full md:w-full sm:justify-center md:justify-center ">
        <TabItem value="/" title="Início" />
        <TabItem value="gallery" title="Galeria" />
        <TabItem value="artists" title="Artistas" />
        <TabItem value="about" title="Sobre" />

        <TabItem value="art-events" title="Eventos" />
        <TabItem value="blog" title="Blog" />
      </Tabs.List>
    </Tabs.Root>
  )
}
