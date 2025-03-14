'use client'

import { loginGoogle, loginGithub, loginDiscord } from "@/lib/actions"
import { useActionState } from "react"

function OauthForm({ className, error }) {
const [state1, action1, pending1] = useActionState(loginGoogle, {})
const [state2, action2, pending2] = useActionState(loginGithub, {})
const [state3, action3, pending3] = useActionState(loginDiscord, {})

  return (
    <form className={className}>
      <h1 className="text-3xl font-bold mb-4">Iniciar sesión OAuth</h1>

      <div className='flex flex-col gap-1'>
        <button formAction={action1} disabled={pending1}
          className="flex group gap-6 items-center px-4 py-2 bg-blue-300 disabled:bg-slate-300 disabled:animate-pulse">
          <img src="/images/google.svg" alt="Google" className="group-disabled:animate-spin"/>  Iniciar sesión con Google
        </button>

        <button formAction={action2} disabled={pending2}
          className="flex group gap-6 items-center px-4 py-2 bg-blue-300 disabled:bg-slate-300 disabled:animate-pulse">
          <img src="/images/github.svg" alt="Github" className="group-disabled:animate-spin"/> Iniciar sesión con Github
        </button>

        <button formAction={action3} disabled={pending3}
          className="flex group gap-6 items-center px-4 py-2 bg-blue-300 disabled:bg-slate-300 disabled:animate-pulse">
          <img src="/images/discord.svg" alt="Discord" className="group-disabled:animate-spin"/> Iniciar sesión con Discord
        </button>
        {error}
      </div>
    </form>
  )
}

export default OauthForm
