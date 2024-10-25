import React, { useState } from 'react'

function ReviewCard() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      reviewer: 'Fannie Summers',
      role: 'Designer',
      rating: 4,
      text: 'Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.',
      image: "/profile-picture-1.svg"
    },
    {
      id: 2,
      reviewer: 'Albert Flores',
      role: 'Developer',
      rating: 5,
      text: 'Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.',
      image: "/profile-picture-2.svg"
    },
  ]);

  return (
    <div className="review-container p-tb-5">
      <h2 className="xl-heading">Clients are Loving Our App</h2>

      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <p className="quote-mark"><i className="fa-sharp fa-solid fa-quote-left"></i></p>

          <div className='stars'>
            {[...Array(5)].map((_, i) => (
              <i key={i} className={`fa-star-sharp ${i < review.rating ? 'fa-solid yellow-star' : 'fa-light star'}`}
              ></i>
            ))}
          </div>

          <p className="m-font">{review.text}</p>
          <div className="reviewer">
            <img src={review.image} />
            <p className="x-bold">{review.reviewer}<br /><span className="s-font">{review.role}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewCard