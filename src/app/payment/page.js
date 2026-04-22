import Mainpayment from '@/components/pages/payments/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Payments & PTP">
        <Mainpayment/>
      </MainLayout>
    </div>
  )
}

export default page
