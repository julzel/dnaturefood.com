import React, { useState } from 'react';
import Svg from 'react-inlinesvg';

// local imports
import './Home.scss';
import Logo from '../../assets/images/dnature-logo.svg';
import Scroller from '../../components/Scroller/Scroller';
import Spinner from '../../components/Spinner/Spinner';

let timeoutId = null;

const Home = () => {
  const [scrollValue, setScrollValue] = useState(0);
  
  const getScrollStatus = status => {
    clearTimeout(timeoutId);
    setScrollValue(scrollValue + status);
    timeoutId = setTimeout(() => setScrollValue(0), 500);
  }

  return (
    <div className="page home">
      <Scroller getScrollStatus={getScrollStatus}>
        <h1>
          <Svg className="home-logo" src={Logo} style={{ transform: `rotate(${scrollValue*1.5}deg)`}} />
        </h1>
        <Spinner />
      </Scroller>
    </div>
  );
}
 
export default Home;