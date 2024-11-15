import React, { useEffect, useState } from 'react'

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const isButtonVisible = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    }
    window.addEventListener('scroll', isButtonVisible);
    return () => {
      window.removeEventListener('scroll', isButtonVisible);
    }
  }, []);
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior:'smooth' });
  }

  return (
    <>
      {showButton && 
        <div>
          <button onClick={handleScrollToTop}><i className="fa-regular fa-angle-up scrollToTopButton"></i></button>
        </div>
      }
    </>
  )
}

export default ScrollToTopButton