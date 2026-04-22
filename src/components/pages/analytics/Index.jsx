import Heading from '@/components/atoms/Heading'
import React from 'react'
import MetricsData from './MetricsData'
import RecoveryForecast from './RecoveryForecast'
import ChannelPerformance from './ChannelPerformance'
import GeographicAnalytics from './GeographicAnalytics'
import SentimentAnalytics from './SentimentAnalytics'
import AutoSummary from './AutoSummary'

const MainAnalytics = () => {
  return (
    <div>
      <Heading
        title="AI Analytics & Insights"
        paragraph="Advanced analytics powered by AI for data-driven decisions"
      />

      <MetricsData/>
      <RecoveryForecast/>
      <ChannelPerformance/>
      <GeographicAnalytics/>
      <SentimentAnalytics/>
      <AutoSummary/>
    </div>
  )
}

export default MainAnalytics
