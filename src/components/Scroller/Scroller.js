import React, { useState } from 'react';

// local imports
import './Scroller.scss'

const Scroller = ({ children, getScrollStatus }) => {
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = e => {
    const { screenY } = e.touches[0];
    setTouchStart({ screenY });
  };

  const handleTouchMove = e => {
    const { screenY } = e.touches[0];
    if (touchStart.screenY < screenY) {
      getScrollStatus(1);
    } else if (touchStart.screenY > screenY) {
      getScrollStatus(-1);
    }
    setTouchStart({ screenY });
  };

  const handleWheel = e => {
    const { deltaY } = e;
    if (deltaY > 0) {
      getScrollStatus(1);
    } else if (deltaY < 0) {
      getScrollStatus(-1);
    }
  };

  const handleTouchEnd = () => {
    getScrollStatus(null);
  };

  return (
    <div
      className="scroller"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onWheel={handleWheel}>
        {children}
    </div>
  );
}
 
export default Scroller;