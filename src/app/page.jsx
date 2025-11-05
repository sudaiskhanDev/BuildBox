import Header from '@/components/Main/Header'
import TeamsLogo from '@/components/Main/TeamsLogo'
import ToolsSection from '@/components/Main/ToolsSection'
import NavBar from '@/components/NavBar'
import { Marquee } from '@/components/ui/marquee'
import React from 'react'

const page = () => {
  return (
   <>
   <NavBar />
   <Header />
   <TeamsLogo />
   <ToolsSection />
<Marquee>
  <span>Next.js</span>
  <span>React</span>
  <span>TypeScript</span>
  <span>Tailwind CSS</span>
</Marquee> 
   </>
  )
}

export default page  