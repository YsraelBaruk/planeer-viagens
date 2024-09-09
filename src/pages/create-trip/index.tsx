import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { InviteGuestsModal } from "./invite-guests-modal"
import { ConfirmTripModal } from "./confirm-trip-modal"
import { DestinationAndDateStep } from "./steps/destination-and-date-step"
import { InviteGuestsStep } from "./steps/invite-guests-step"

export function CreateTripPage() {
    const navigate = useNavigate()

  const [isGuestsInputOpen, setGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setGuestsModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState([
    'israel@gmail.com',
    'baruque@gmail.com'
  ])
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

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

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    
    const data = new FormData(event.currentTarget)
    // const email: string | undefined = data.get('email')?.toString ?? undefined
    const email = data.get('email')?.toString()

    if(!email){
      return
    }

    if(emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailsFromInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  function openConfirmTripModal(){
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal(){
    setIsConfirmTripModalOpen(false)
  }

    function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        navigate('/trip/123')
    }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Logotipo Planner" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep 
            isGuestsInputOpen={isGuestsInputOpen}
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep 
              openConfirmTripModal={openConfirmTripModal}
              emailsToInvite={emailsToInvite}
              openGuestsModal={openGuestsModal}
            />
          )}
        </div>
      
        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.</p>
      </div>
      {isGuestsModalOpen && (
        <InviteGuestsModal 
            closeGuestsModal={closeGuestsModal}
            addNewEmailToInvite={addNewEmailToInvite}
            emailsToInvite={emailsToInvite}
            removeEmailsFromInvite={removeEmailsFromInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal 
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
      )}

    </div>
  )
}