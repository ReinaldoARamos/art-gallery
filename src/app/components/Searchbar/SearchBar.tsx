import { ArrowCircleRight, CaretDown } from 'phosphor-react'
import { Button } from '../Button/ButtonTest'

interface SearhBarProps {
  input1: string
  input2: string
  input3: string
  placeholder1: string
  placeholder2: string
  placeholder3: string
}
export function SearchBar({
  input1,
  input2,
  input3,
  placeholder1,
  placeholder2,
  placeholder3,
}: SearhBarProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <div>
        <h3 className="text-title text-md font-semibold pb-1.5">{input1}</h3>
        <div className="flex gap-3">
          <input
            placeholder={placeholder1}
            className="p-3 lg:w-[32.5rem] border border-zinc-300 rounded-md focus:outline-none"
          />
          <Button>
            <ArrowCircleRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-title text-md font-semibold pb-1.5">{input2}</h3>
        <div className="flex items-center lg:w-80  w-64  justify-between  border border-zinc-300 rounded-md">
          <input
            placeholder={placeholder2}
            className="p-3  focus:outline-none"
          />
          <CaretDown className="h-6 w-6 mr-3" />
        </div>
      </div>
      <div>
        <h3 className="text-title text-md font-semibold pb-1.5">{input3}</h3>
        <div className="flex items-center lg:w-80  w-64  justify-between  border border-zinc-300 rounded-md">
          <input
            placeholder={placeholder3}
            className="p-3  focus:outline-none "
          />
          <CaretDown className="h-6 w-6 mr-3" />
        </div>
      </div>
    </div>
  )
}
