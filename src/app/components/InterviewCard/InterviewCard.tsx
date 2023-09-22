import { InterViewControsl } from './InterViewControls'

interface InterviewProps {
  src?: string
}

export function InterviewCard({ src }: InterviewProps) {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-[url('/images/Video-1.jpg')] bg-cover w-[40rem] h-[22rem] flex flex-col justify-between">
          <InterViewControsl />
        </div>
      </div>
    </>
  )
}
