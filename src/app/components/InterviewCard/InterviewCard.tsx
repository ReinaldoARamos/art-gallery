import { InterViewControsl } from './InterViewControls'

export function InterviewCard() {
  return (
    <>
      <div className=" pb-7">
        <div className="bg-[url('/images/Video-1.jpg')] bg-cover lg:w-[40rem] lg:h-[22rem]  flex flex-col justify-between">
          <InterViewControsl />
        </div>
      </div>
    </>
  )
}
