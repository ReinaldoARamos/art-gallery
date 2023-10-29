'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function HeaderTabs() {
  const [currentTab, setCurrentTab] = useState('/')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="group flex gap-8 ">
        <TabItem value="/" title="Início" isSelected={currentTab === '/'} />
        <TabItem
          value="gallery"
          title="Galeria"
          isSelected={currentTab === 'gallery'}
        />
        <TabItem
          value="artists"
          title="Artistas"
          isSelected={currentTab === 'artists'}
        />
        <TabItem
          value="about"
          title="Sobre"
          isSelected={currentTab === 'about'}
        />

        <TabItem
          value="art-events"
          title="Eventos"
          isSelected={currentTab === 'art-events'}
        />
        <TabItem value="blog" title="Blog" isSelected={currentTab === 'blog'} />
      </Tabs.List>
    </Tabs.Root>
  )
}
