import { Copyright, Facebook, Instagram, Twitter } from 'lucide-react'

import FooterLogo from './FooterLogo'

export function Footer() {
  return (
    <div
      className="flex flex-col justify-between items-center bg-zinc-200 space-y-14 pt-4
    "
    >
      <FooterLogo />

      <div className="gap-12 flex ">
        <button className="bg-arrow  p-3 rounded-full">
          <Facebook className="w-6  h-6 text-white " />
        </button>
        <button className="bg-arrow p-3 rounded-full">
          <Twitter className="w-6  h-6 text-white " />
        </button>
        <button className="bg-arrow p-3 rounded-full">
          <Instagram className="w-6  h-6 text-white" />
        </button>
      </div>
      <div className="flex gap-2 pb-6">
        <Copyright />
        Copyright Arte Concreta
      </div>
    </div>
  )
}
