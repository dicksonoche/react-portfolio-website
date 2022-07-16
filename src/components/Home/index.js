import { useEffect, useState } from 'react'
//import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse"
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo.png'
import one from '../../assets/images/1.png'
import two from '../../assets/images/2.png'
import three from '../../assets/images/3.png'
import four from '../../assets/images/4.png'
import five from '../../assets/images/5.png'
import six from '../../assets/images/6.png'
import seven from '../../assets/images/7.png'
import eight from '../../assets/images/8.png'
import nine from '../../assets/images/9.png'
import ten from '../../assets/images/10.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [ 'S', 'i', 'm', 'o', 'n', '.']
  /*const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]*/

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>e</span>
            <span className={`${letterClass} _13`}>y,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            {/*<AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />*/}
          </h1>
          <h2>Front End Developer / React.js / UX Designer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <Link to="/contact" className="flat-button">
            DOWNLOAD CV
          </Link>
        </div>
          <Logo />
            <img style={{width: '300px', height: '300px'}} src={one} alt="" />
            <img style={{width: '300px', height: '300px'}} src={two} alt="" />
            <img style={{width: '300px', height: '300px'}} src={three} alt="" />
            <img style={{width: '300px', height: '300px'}} src={four} alt="" />
            <img style={{width: '300px', height: '300px'}} src={five} alt="" />
            <img style={{width: '300px', height: '300px'}} src={six} alt="" />
            <img style={{width: '300px', height: '300px'}} src={seven} alt="" />
            <img style={{width: '300px', height: '300px'}} src={eight} alt="" />
            <img style={{width: '300px', height: '300px'}} src={nine} alt="" />
            <img style={{width: '300px', height: '300px'}} src={ten} alt="" />
          {/*<MouseParallaxChild factorX="{0.07}" factorY="{0.08}">
            <img src={LogoS} alt="" />
          </MouseParallaxChild>*/}
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
