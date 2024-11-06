import React, { useState } from 'react'

function HowToCarousel() {


  const [carousel, setCarousel] = useState([
    {
      id: 1,
      title: 'See your transaction history',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sapiente sit eligendi placeat ullam perferendis distinctio ipsa veritatis incidunt ea!',
      image: '/sc-3-desktop.svg',
      isActive: false
    },
    {
      id: 2,
      title: 'Latest transaction history',
      content: 'Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.',
      image: '/sc-1-desktop.svg',
      isActive: true
    },
    {
      id: 3,
      title: 'Transfer to people from your contact list',
      content: 'Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.',
      image: '/sc-2-desktop.svg',
      isActive: false
    },
  ]);

 
  function slideItem(direction) {
    setCarousel(prevCarousel => {
    let activeIndex = prevCarousel.findIndex(item => item.isActive);
    let newIndex;

    if (direction === 'right') {
      newIndex = (activeIndex + 1) % prevCarousel.length;
    } else if (direction === 'left') {
      newIndex = (activeIndex - 1 + prevCarousel.length) % prevCarousel.length;
    }

    
    return prevCarousel.map((item, index) => {
      let positionClass = '';

      if (index === newIndex) {
        positionClass = 'active';
      } else if ((index + 1) % prevCarousel.length === newIndex) {
        positionClass = 'right';
      } else if ((index - 1 + prevCarousel.length) % prevCarousel.length === newIndex) {
        positionClass = 'left';
      }
    
      return { ...item, isActive: index === newIndex, position: positionClass};
    });
  });
  }

  const displayedCarousel = [
    carousel[(carousel.findIndex(i => i.isActive) - 1 + carousel.length) % carousel.length],
    carousel[carousel.findIndex(i => i.isActive)],
    carousel[(carousel.findIndex(i => i.isActive) + 1) % carousel.length]
  ]



  return (
    <div className="carousel">
{/*       <input type="radio" name="slider" id="sc-1"/>
      <input type="radio" name="slider" id="sc-2" />
      <input type="radio" name="slider" id="sc-3" /> */}

      <div className="slides">
        <img src="/iphone-bg-desktop.svg" alt="iPhone 12" className="bg-iphone"/>
        
        {displayedCarousel.map((item, index) => (
          <label className="card" key={item.id} onClick={() => !item.isActive && slideItem(displayedCarousel.findIndex((i) => i === item) > displayedCarousel.findIndex((i) => i.isActive) ? 'right' : 'left')}>
          <img className={`card-${item.position}`}src={item.image} alt="App illustration" />
          </label>
        ))}

      </div>

      <div className="desktop-text" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        {carousel.map((item) => (
          item.isActive && (
        <div id="text-slide" key={item.id}>
          <div>
            <h3 className="sm-heading">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </div>
          )
        ))}
      </div>
    </div>
  );
}

export default HowToCarousel