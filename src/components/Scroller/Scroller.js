import React, { useState } from 'react';

// local imports
import './Scroller.scss'

const Scroller = ({ children, getScrollStatus }) => {
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = e => {
    const { clientY } = e.touches[0];
    setTouchStart({ clientY });
  };

  const handleTouchMove = e => {
    const { clientY } = e.touches[0];
    if (touchStart.clientY < clientY) {
      getScrollStatus(-1);
    } else if (touchStart.clientY >= clientY) {
      getScrollStatus(1);
    }
    setTouchStart({ clientY });
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
    getScrollStatus(0);
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