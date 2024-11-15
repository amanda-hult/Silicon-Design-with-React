import React, { useState } from 'react'
import Carousel from 'react-spring-3d-carousel';
import { config } from '@react-spring/web';

function HowToCarousel() {

  let carouselCard = [
    {
      id: 1,
      title: 'See your transaction history',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sapiente sit eligendi placeat ullam perferendis distinctio ipsa veritatis incidunt ea!',
      image: '/sc-3-desktop.svg',
    },
    {
      id: 2,
      title: 'Latest transaction history',
      content: 'Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.',
      image: '/sc-1-desktop.svg',
    },
    {
      id: 3,
      title: 'Transfer to people from your contact list',
      content: 'Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.',
      image: '/sc-2-desktop.svg',
    },
  ];

  const [goToSlide, setGoToSlide] = useState(0);
  
  const [cards] = useState(
    carouselCard.map((element, index) => ({
    ...element,
    content: (
      <div className="card-item" data-aos="zoom-in" data-aos-duration="500">
        <img src={element.image} alt='App Illustration' className="card-image" />
      </div>
    ), onClick: () => setGoToSlide(index),
  }))
  );

  const [offsetRadius] = useState(1);
  const [showArrows] = useState(false);

 

  const currentSlide = carouselCard[goToSlide] || {};



  return (
    <div className='carousel'>
      <div className='slides'>
        <div className="bg"><img src="/iphone-bg-desktop.svg" alt="iPhone 12" className="bg-iphone"/></div>
        <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
        ></Carousel>
      </div>

      <div className='desktop-text' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <h3 className="sm-heading">{currentSlide.title}</h3>
        <p className='opacity80'>{currentSlide.content}</p>
      </div>

    </div>
  );
}

export default HowToCarousel