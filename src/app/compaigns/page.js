import MainCompaigns from '@/components/pages/campaigns/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Campaigns">
        <MainCompaigns/>
      </MainLayout>
    </div>
  )
}

export default page
