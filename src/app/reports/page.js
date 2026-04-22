import Mainreport from '@/components/pages/reports/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Reports">
        <Mainreport/>
      </MainLayout>
    </div>
  )
}

export default page
