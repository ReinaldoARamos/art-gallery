import { ComponentProps, ElementType } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {
  text: string
  icon: ElementType
}
export function Button({ text, icon: Icon }: ButtonProps) {
  return (
    <button className="h-12 px-12   bg-base rounded-full flex text-base  text-white font-bold  justify-center items-center gap-2">
      {text}
      <Icon className="h-5 w-5 " />
    </button>
  )
}
