import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: [
    'h-12 px-12 rounded-full flex text-base    justify-center items-center gap-2',
    ' hover:font-bold transition transition-durati',
  ],

  variants: {
    variant: {
      primary:
        'bg-base text-white hover:bg-arrow hover:font-bold transition duration-300',
      ghost: 'text-arrow hover:text-base transition duration-300',
      light:
        'bg-white text-base hover:bg-zinc-100 transition duration-300 hover:text-arrow',
    },
  },
  defaultVariants: { variant: 'primary' },
})

export type Buttonprops = ComponentProps<'button'> & VariantProps<typeof button>
export function Button({ variant, ...props }: Buttonprops) {
  return <button {...props} className={button({ variant })} />
}
