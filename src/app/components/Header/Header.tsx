import { HeaderTabs } from '../HeaderTabs'
import Logo from './Logo'

export default function Header() {
  return (
    <div className="flex  w-full items-center justify-between bg-base md:px-72 text-zinc-200  h-28 ">
      <Logo className="md:flex hidden" />
      <HeaderTabs />
    </div>
  )
}
