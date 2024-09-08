import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from "lucide-react"
import { useState } from "react"

export function App() {
  const [isGuestsInputOpen, setGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setGuestsModalOpen] = useState(false)

  function openGuestsInput(){
    setGuestsInputOpen(true)
  }

  function closeGuestsInput(){
    setGuestsInputOpen(false)
  }

  function openGuestsModal(){
    setGuestsModalOpen(true)
  }

  function closeGuestsModal(){
    setGuestsModalOpen(false)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Logotipo Planner" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className="flex flex-1 items-center gap-2">
                <MapPin className="size-5 text-zinc-400"/>
                <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" 
                className="flex-1 outline-none bg-transparent text-lg placeholder:text-zinc-400"/>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <Calendar className="size-5 text-zinc-400"/>
                <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?"  className="outline-none bg-transparent text-lg placeholder:text-zinc-400 w-40"/>
              </div>
              <div className="w-px h-6 bg-zinc-900"></div>
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

          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button type="button" onClick={openGuestsModal} className="flex flex-1 items-center gap-2">
                <UserRoundPlus className="size-5 text-zinc-400"/>
                <span className="text-zinc-400 text-lg flex-1 text-left">Quem estará na viagem</span>
              </button>

              <div className="w-px h-6 bg-zinc-900"></div>
              <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className="size-5"/>
              </button>
            </div>
          )}
        </div>
      
        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.</p>
      </div>
      {isGuestsModalOpen && (
        <div className="fixed indent-0 bg-black/60 h-screen w-full flex items-center justify-center">
          <div className="w-[640px] h-96 rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            {/* //w-[640px] */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button type="button" onClick={closeGuestsModal}><X className="size-5 text-zinc-400"/></button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação na viagem
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                <span className="text-zinc-300">jessica.white44@yahoo.com</span>
                <button type="button"><X className="size-4 text-zinc-400"/></button>
              </div>
              <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                <span className="text-zinc-300">erik_leffler3@gmail.com</span>
                <button type="button"><X className="size-4 text-zinc-400"/></button>
              </div>
              <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                <span className="text-zinc-300">rebekah.conn21@gmail.com</span>
                <button type="button"><X className="size-4 text-zinc-400"/></button>
              </div>
              <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                <span className="text-zinc-300">emile.mayer25@yahoo.com</span>
                <button type="button"><X className="size-4 text-zinc-400"/></button>
              </div>
              <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                <span className="text-zinc-300">justus_hessel81@hotmail.com</span>
                <button type="button"><X className="size-4 text-zinc-400"/></button>
              </div>
            </div>
            <div className="w-full h-px bg-zinc-800 flex ">
              <form className="p-2.5 bg-zinc-950 h-16 border border-zinc-800 rounded-lg flex items-center gap-2">
                <div className="px-2 flex items-center gap-2 flex-1">
                  <AtSign className="text-zinc-400 size-5" />
                    <input type="text" placeholder="Digite o e-mail do cocvidado" 
                      className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1"/>
                </div>
                <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                  Convidar
                  <Plus className="size-5"/>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}