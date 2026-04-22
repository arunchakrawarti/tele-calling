import MainAnalytics from '@/components/pages/analytics/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Analytics">
        <MainAnalytics/>
      </MainLayout>
    </div>
  )
}

export default page
