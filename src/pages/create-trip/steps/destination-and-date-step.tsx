import { format } from "date-fns";
import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
  setDestination: (destination: string) => void
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
  eventStartAndEndDates: DateRange | undefined
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  // const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>()

  function openDatePicker(){
    setIsDatePickerOpen(true)
  }

  function closeDatePicker(){
    setIsDatePickerOpen(false)
  }

  const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to
  ? format(eventStartAndEndDates.from, "d ' de ' LLL ").concat('até').concat(format(eventStartAndEndDates.to, " d' de ' LLL"))
  : null

  return(
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center justify-center shadow-shape gap-3">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400"/>
        <input 
          onChange={event => setDestination(event.target.value)}
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Para onde você vai?" 
          className="flex-1 outline-none bg-transparent text-lg placeholder:text-zinc-400"
        />
      </div>
      <button onClick={openDatePicker} disabled={isGuestsInputOpen} className="flex items-center gap-2 flex-1 text-left">
        <Calendar className="size-5 text-zinc-400"/>
        <span 
          className="text-lg text-zinc-400 w-40 flex-1"
        >
          {displayedDate || 'Quando ?'}
        </span>
      </button>

      {isDatePickerOpen && (
        <div 
          className="bg-black/60 h-full w-full flex flex-1 items-center justify-center fixed">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button type="button" onClick={closeDatePicker}><X className="size-5 text-zinc-400"/></button>
              </div>
            </div>
            <DayPicker 
              mode="range" 
              selected={eventStartAndEndDates} 
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800" />
      {isGuestsInputOpen ? (
          <button onClick={closeGuestsInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 
          font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alterar local/data
            <Settings2 className="size-5"/>
          </button>
        ) : (
          <button onClick={openGuestsInput} className="bg-lime-300 text-lime-950 
          rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
            Continuar 
            <ArrowRight className="size-5"/>
          </button>
        )
      }
    </div>
  )
}