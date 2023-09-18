import { ModeToggle } from '@/components/mode-toggle'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main>
      <p className='text-indigo-500 text-3xl font-bold'>Discord Clone</p>
      <UserButton
        afterSignOutUrl='/'
      />
      <ModeToggle />
    </main>
  )
}
