import MainAIVoice from '@/components/pages/ai-voice-bot/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="AI Voice Bot">
        <MainAIVoice/>
      </MainLayout>
    </div>
  )
}

export default page
