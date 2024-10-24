import React from 'react'

function Reviews() {
  return (
    <>
      <section className="review-section">
        <div className="review-container p-tb-5">
          <h2 className="xl-heading">Clients are Loving Our App</h2>
          <div className="review-card">
            <p className="quote-mark"><i className="fa-sharp fa-solid fa-quote-left"></i></p>
            <div className="stars">
              <i className="fa-solid fa-star-sharp yellow-star"></i>
              <i className="fa-solid fa-star-sharp yellow-star"></i>
              <i className="fa-solid fa-star-sharp yellow-star"></i>
              <i className="fa-solid fa-star-sharp yellow-star"></i>
              <i className="fa-light fa-star-sharp star"></i>
            </div>
            <p className="m-font">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>          
            <div className="reviewer">
              <img src="/profile-picture-1.svg" />
              <p className="x-bold">Fannie Summers<br /><span className="s-font">Designer</span></p>
            </div>
          </div>

          <div className="review-card">
            <p className="quote-mark"><i className="fa-sharp fa-solid fa-quote-left"></i></p>
            <div className="stars">
              <i className="fa-solid fa-star-sharp yellow-star"></i>
              <i className="fa-solid fa-star-sharp yellow-star"></i>
              <i className="fa-solid fa-star-sharp yellow-star"></i>
              <i className="fa-solid fa-star-sharp yellow-star"></i>
              <i className="fa-solid fa-star-sharp yellow-star"></i>
            </div>
            <p className="m-font">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>                
            <div className="reviewer">
              <img src="/profile-picture-2.svg" />
              <p className="x-bold">Albert Flores<br /><span className="s-font">Developer</span></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews