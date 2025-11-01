import Header from '@/components/Main/Header'
import LoginModal from '@/components/Main/LoginModal'
import RegisterModel from '@/components/Main/RegisterModel'
import ToolsSection from '@/components/Main/ToolsSection'
import NavBar from '@/components/NavBar'
import React from 'react'

const page = () => {
  return (
   <>
   <NavBar />
   <Header />
   <ToolsSection />
   {/* <LoginModal /> */}
   <RegisterModel />
   </>
  )
}

export default page