import React from 'react'

function AppInfo() {
  return (
    <>
      <section>
        <div className="app-info p-5">
          <div className="info-list">
            <h2 className="m-heading">Make your money <br />transfer simple and clear</h2>
            <ul>
              <li className="m-font"><i className="fa-sharp fa-regular fa-circle-check"></i> Banking transactions are free for you</li>
              <li className="m-font"><i className="fa-sharp fa-regular fa-circle-check"></i> No monthly cash commission</li>
              <li className="m-font"><i className="fa-sharp fa-regular fa-circle-check"></i> Manage payments and transactions online</li>
            </ul>
            <a className="learn-more-btn" href="#">Learn more <span><i className="fa-sharp fa-solid fa-arrow-right"></i></span></a>
          </div>

          <img src="public/app-history.svg" />
          <img src="public/app-conversations.svg" />

          <div className="payment-details">
            <h2 className="m-heading">Receive payment from <br />international bank details</h2>
            <div className="payment-info">
              <img src="public/payment-icon.svg" />
              <p className="m-font">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
            </div>
            <div className="payment-info">  
              <img src="public/cashback-icon.svg" />
              <p className="m-font">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
            </div>
            <a className="learn-more-btn" href="#">Learn more <span><i className="fa-sharp fa-solid fa-arrow-right"></i></span></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default AppInfo