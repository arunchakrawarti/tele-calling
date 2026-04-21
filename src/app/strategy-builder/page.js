import MainStrategy from '@/components/pages/strategy-builder/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Strategy Builder">
        <Suspense fallback={<div>Loading...</div>}>
        <MainStrategy/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
