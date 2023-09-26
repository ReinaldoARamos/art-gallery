import { CaretDown } from 'phosphor-react'

interface QuestionProps {
  question: string
}
export function Questions({ question }: QuestionProps) {
  return (
    <div className="flex item-center pt-14 p-4 w-[54rem] justify-between border-b border-spacing-2 border-gray">
      <span className="text-Title text-xl "> {question}</span>
      <button>
        <CaretDown className="w-6 h-6" />
      </button>
    </div>
  )
}
