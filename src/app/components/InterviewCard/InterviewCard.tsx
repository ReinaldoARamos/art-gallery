import { Play } from 'lucide-react'

interface InterviewProps {
  src?: string
}

export function InterviewCard({ src }: InterviewProps) {
  return (
    <div className="px-72 ">
      <div className="bg-[url('/images/Video-2.jpg')] bg-cover w-image h-imagex">
        <div className="flex justify-center items-center pt-28 opacity-80">
          <Play
            className="p-3 bg-zinc-200 rounded-full flex items-center justify-center"
            width={135}
            height={135}
          />
        </div>
      </div>
    </div>
  )
}
