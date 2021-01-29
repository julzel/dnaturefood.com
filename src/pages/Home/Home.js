import React, { useEffect, useRef } from 'react';
import Svg from 'react-inlinesvg';

// local imports
import './Home.scss';
import Logo from '../../assets/images/dnature-logo.svg';
import imgCol1 from '../../assets/images/alimentacion.jpg'
import imgCol2 from '../../assets/images/expediente.jpg'
import imgCol3 from '../../assets/images/comportamiento.jpg'
import Spinner from '../../components/Spinner/Spinner';

let color1Opacity = 0;
let color2Opacity = 0;
let color3Opacity = 0;
const isMobile = window.innerWidth < 768;

const Home = () => {
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);

  const handleHomeScroll = () => {
    if (isMobile) {
      if (((col1Ref.current.offsetTop - window.innerHeight + 50) < window.scrollY) && ((col2Ref.current.offsetTop - window.innerHeight + 50) >= window.scrollY)) {
        color1Opacity = color1Opacity + 0.015;
        col1Ref.current.style.opacity = color1Opacity;
      }
      if (((col2Ref.current.offsetTop - window.innerHeight + 50) < window.scrollY) && ((col3Ref.current.offsetTop - window.innerHeight + 50) >= window.scrollY)) {
        color2Opacity = color2Opacity + 0.015;
        col2Ref.current.style.opacity = color2Opacity;
      }
      if (((col3Ref.current.offsetTop - window.innerHeight + 50) < window.scrollY)) {
        color3Opacity = color3Opacity + 0.015;
        col3Ref.current.style.opacity = color3Opacity;
      }
    } else {
      color1Opacity = color1Opacity + 0.015;
      col1Ref.current.style.opacity = color1Opacity;
      col2Ref.current.style.opacity = color1Opacity;
      col3Ref.current.style.opacity = color1Opacity;
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleHomeScroll);
    return () => {
      window.removeEventListener('scroll', handleHomeScroll)
    }
  }, [])

  return (
    <div className="page home">
      <div className="home-hero">
        <h1>
          <Svg className="home-logo" src={Logo} />
        </h1>
        <Spinner />
        <a href="https://www.instagram.com/dnaturecr/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram" /> <span>Síguenos en Instagram</span>
        </a>
      </div>
      <div className="home-banner">
        <h2>Elige mejor</h2>
      </div>
      <div className="home-services">
        <h2>Nuestros Servicios</h2>
        <div className="home-row">
          <div className="home-col home-col-1" ref={col1Ref}>
            <h3>Asesoría de nutrición personalizada</h3>
            <p>Laborum quis elit aliqua cillum quis.</p>
            <img className="home-services-image" src={imgCol1} alt="asesoría" />
          </div>
          <div className="home-col home-col-2" ref={col2Ref}>
            <h3>Expediente médico veterinario</h3>
            <p>Laborum quis elit aliqua cillum quis.</p>
            <img className="home-services-image" src={imgCol2} alt="expediente médico" />
          </div>
          <div className="home-col home-col-3" ref={col3Ref}>
            <h3>Cursos de nutrición y comportamiento canino</h3>
            <p>Laborum quis elit aliqua cillum quis.</p>
            <img className="home-services-image" src={imgCol3} alt="cursos" />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Home;