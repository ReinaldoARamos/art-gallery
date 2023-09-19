'use client'

import * as Tabs from '@radix-ui/react-tabs'
import {TabItem} from './TabItem'
import { useState } from 'react'


export function HeaderTabs() {
    const [currentTab, setCurrentTab] = useState('Início')

    return (
        <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
            <Tabs.List className='group flex gap-8 md:flex sm:flex lg:w-80 sm:items-center sm:w-full md:w-full sm:justify-center md:justify-center '>
            <TabItem value='inicio' title='Início' isSelected={currentTab === 'inicio'} />
            <TabItem value='galeria' title='Galeria'  isSelected={currentTab === 'galeria'} />
            <TabItem value='artistas' title='Grtistas'  isSelected={currentTab === 'artistas'} />
            <TabItem value='eventos' title='Eventos'  isSelected={currentTab === 'eventos'} />
            <TabItem value='blog' title='Eventos' isSelected={currentTab === 'blog'} />
          
            </Tabs.List>
        </Tabs.Root>
    )
}