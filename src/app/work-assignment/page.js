import MainAssignment from '@/components/pages/work-assignment/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Work Assignment">
        <Suspense fallback={<div>Loading...</div>}>
        <MainAssignment/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
