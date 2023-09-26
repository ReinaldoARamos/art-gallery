import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: [
    'h-12 px-12 rounded-full flex text-base    justify-center items-center gap-2',
    ' hover:font-bold transition duration-300',
  ],

  variants: {
    variant: {
      primary: 'bg-base text-white hover:bg-arrow hover:font-bold ',
      ghost: 'text-arrow hover:text-base ',
      light: 'bg-white text-base hover:bg-zinc-100 hover:text-arrow',
      lightwithborder:
        'bg-white text-base border border-base hover:bg-zinc-100  hover:text-arrow',
      articles: 'text-title font-bold hover:text-title  hover:text-arrow',
    },
  },
  defaultVariants: { variant: 'primary' },
})

export type Buttonprops = ComponentProps<'button'> & VariantProps<typeof button>
export function Button({ variant, ...props }: Buttonprops) {
  return <button {...props} className={button({ variant })} />
}
