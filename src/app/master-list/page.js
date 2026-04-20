import MainMaster from '@/components/pages/master-list/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Master List">
        <Suspense fallback={<div>Loading...</div>}>
        <MainMaster/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
