import { SpeakerHigh, Play, Pause } from 'phosphor-react'

export function InterViewControsl() {
  return (
    <>
      <div className="flex items-center justify-center pt-28">
        <button className="group p-12 flex justify-center items-center rounded-full border-3 divide-opacity-60 border border-zinc-50 relative">
          <Play
            width={60}
            height={60}
            weight="bold"
            color="white"
            className="icon"
          />
          <div className="overlay absolute inset-0 bg-black bg-opacity-30 rounded-full opacity-0 group-hover:opacity-100 flex justify-center items-center">
            <Play width={40} height={40} weight="fill" color="white" />
          </div>
        </button>
      </div>
      <div className="bg-Title flex justify-between items-center gap-2 text-white py-4 px-2">
        <div className="flex gap-3">
          <button>
            <Play
              className="h-10 w-10  bg-white p-2 rounded-full"
              weight="fill"
              color="black"
            />
          </button>

          <button>
            <Pause
              className="h-10 w-10  bg-white p-3 rounded-full"
              weight="fill"
              color="black"
            />
          </button>
        </div>

        <div className="bg-white w-full  h-6 rounded-full  ">
          <div className="w-1/4 bg-arrow rounded-l-full  border border-white h-6" />
        </div>

        <button>
          <SpeakerHigh className="h-10 w-10" weight="fill" color="white" />
        </button>
      </div>
    </>
  )
}
