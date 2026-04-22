import MainField from '@/components/pages/field-staff/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Field Staff">
        <MainField/>
      </MainLayout>
    </div>
  )
}

export default page
