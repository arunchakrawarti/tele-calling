import TeleCallingMonitor from '@/components/pages/tele-calling/TeleCallingMonitor'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Tele-Calling">
        <TeleCallingMonitor/>
      </MainLayout>
    </div>
  )
}

export default page
