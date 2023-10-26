import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@components/mode-toggle'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
      <ModeToggle />
    </div>
  )
}
