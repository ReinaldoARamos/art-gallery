'use client'

import { HeaderTabs } from '../HeaderTabs'
import { HeaderTabsSm } from '../HeaderTabsSm'
import Logo from './Logo'
import * as Collapsable from '@radix-ui/react-collapsible'
import { List, X } from 'phosphor-react'

export default function Header() {
  return (
    <>
      <div className="flex  justify-between px-6     w-full items-center  bg-base text-zinc-200  h-28 ">
        <Logo className="lg:flex  " />
        <div className="lg:flex hidden">
          {' '}
          <HeaderTabs />
        </div>
        <Collapsable.Root className="lg:hidden pr-6">
          <Collapsable.Trigger>
            <div className=" hover:cursor-pointer">
              <List size={24} />
            </div>
          </Collapsable.Trigger>
          <Collapsable.Content
            className={`flex flex-col gap-6 px-6  data-[state=open]:bottom-0  lg:data-[state=closed]:bottom-0 fixed left-0 top-0 right-0 z-20  bg-base data-[state=closed]:hidden `}
          >
            <div className="flex justify-between">
              <Logo className="lg:flex  " />
              <Collapsable.Trigger>
                <X size={24} />
              </Collapsable.Trigger>
            </div>
            <Collapsable.Trigger>
              <HeaderTabsSm />
            </Collapsable.Trigger>
          </Collapsable.Content>
        </Collapsable.Root>
      </div>
    </>
  )
}
