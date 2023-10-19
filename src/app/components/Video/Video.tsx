import { InterViewControsl } from '../InterviewCard/InterViewControls'

export function Video() {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-[url('/images/Banner.jpg')]  object-cover bg-cover lg:w-[82rem] lg:h-[29.5rem] w-96 flex flex-col justify-between">
          <InterViewControsl />
        </div>
      </div>
    </>
  )
}
