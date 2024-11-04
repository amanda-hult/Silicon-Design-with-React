import React from 'react'
import FeatureItems from '../features/FeatureItems'
import { HashLink } from 'react-router-hash-link'
import InfoList from './InfoList'
import PaymentDetails from './PaymentDetails'

function AppInfo() {
  return (
      <section>
        <div className="app-info p-5">
          <InfoList />
          <img src="/app-history.svg" />
          <img src="/app-conversations.svg" />
          <PaymentDetails />
        </div>
      </section>
  )
}

export default AppInfo