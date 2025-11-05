import Header from '@/components/Main/Header'
import TeamsLogo from '@/components/Main/TeamsLogo'
import ToolsSection from '@/components/Main/ToolsSection'
import UseProblemsSection from '@/components/Main/UseProblemsSection'
import NavBar from '@/components/NavBar'
import React from 'react'

const page = () => {
  return (
   <>
   <NavBar />
   <Header />
   <TeamsLogo />
   <ToolsSection />
<UseProblemsSection/>
   </>
  )
}

export default page  