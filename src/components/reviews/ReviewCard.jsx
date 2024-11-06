import React, { useEffect, useState } from 'react'

function ReviewCard() {
  const [reviews, setReviews] = useState([]);

  const fetchTestimonials = async () => {
    try {
      const resp = await fetch ('https://win24-assignment.azurewebsites.net/api/testimonials');
      if (!resp.ok) throw new Error("Network response was not ok");
      const data = await resp.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching data");
    }
  }

  useEffect(() => {
    fetchTestimonials()
  }, [])

  return (
    <div className="review-container p-tb-5">
      <h2 className="xl-heading" data-aos="fade-right">Clients are Loving Our App</h2>

      {reviews.map((review) => (
        <div key={review.id} className="review-card" data-aos="flip-up" data-aos-duration="800">
          <p className="quote-mark"><i className="fa-sharp fa-solid fa-quote-left"></i></p>

          <div>
            {[...Array(5)].map((_, i) => (
              <i key={i} className={`fa-star-sharp ${i < review.starRating ? 'fa-solid yellow-star' : 'fa-light star'}`}
              ></i>
            ))}
          </div>

          <p className="m-font">{review.comment}</p>
          <div className="reviewer">
            <img src={review.avatarUrl} />
            <p className="x-bold">{review.author}<br /><span className="s-font">{review.jobRole}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewCard