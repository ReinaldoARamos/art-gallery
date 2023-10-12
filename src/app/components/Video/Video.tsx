import { InterViewControsl } from '../InterviewCard/InterViewControls'

export function Video() {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-[url('/images/Banner.jpg')] bg-cover w-[82rem] h-[29.5rem] flex flex-col justify-between">
          <InterViewControsl />
        </div>
      </div>
    </>
  )
}
