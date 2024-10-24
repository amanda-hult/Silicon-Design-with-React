import React from 'react'

function Subscribe() {
  return (
    <div className="subscribe-section">
      <div className="subscribe">
        <img src="public/notification-icon.svg" alt="Notification icon" />
        <h3 className="s-heading">Subscribe to our newsletter<span className="extended-info"> to stay informed about latest updates</span></h3>
      </div>

      <div>
        <form className="email-input">
          <label htmlFor="email"></label>
          <input className="form-input" type="email" id="email" placeholder="     &#xf003;     Your email" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>

{/*       <div>
        <form className="email-input">
          <label htmlFor="email"></label>
          <input className="form-input" type="email" id="email" placeholder="     &#xf003;     Your email" style="font-family:Manrope, FontAwesome;" />
          <input type="submit" value="Subscribe" />
        </form>
      </div> */}
    </div>
  )
}

export default Subscribe