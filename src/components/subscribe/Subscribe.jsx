import React from 'react'
import SubscriptionForm from './SubscriptionForm'

function Subscribe() {
  return (
    <div className="subscribe-section">
      <div className="subscribe">
        <img src="/notification-icon.svg" alt="Notification icon" />
        <h3 className="s-heading">Subscribe to our newsletter<span className="extended-info"> to stay informed about latest updates</span></h3>
      </div>
      <SubscriptionForm />
    </div>
  )
}

export default Subscribe