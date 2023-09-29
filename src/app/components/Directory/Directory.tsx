import { CaretRight } from 'phosphor-react'

interface DirectoryProps {
  path1: string
  path2: string
}
export function Directory({ path1, path2 }: DirectoryProps) {
  return (
    <div className="pb-8 flex">
      <button className="text-brown text-md border-b border-zinc-400">
        {path1}
      </button>{' '}
      <CaretRight className="h-6 w-6" />{' '}
      <button className="text-brown text-md font-bold border-b border-zinc-800">
        {path2}
      </button>
    </div>
  )
}
