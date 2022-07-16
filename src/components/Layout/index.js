import { Outlet } from 'react-router-dom'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse"
import Sidebar from '../Sidebar/'
import './index.scss'
import one from '../../assets/images/1.png'
import two from '../../assets/images/2.png'
import three from '../../assets/images/3.png'
import four from '../../assets/images/4.png'
import five from '../../assets/images/5.png'
import six from '../../assets/images/6.png'
import seven from '../../assets/images/7.png'
//import LogoS from '../../assets/images/logo.png'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">Tech_savvy</span>

        <Outlet />
        <span className="tags bottom-tags">
        <MouseParallaxContainer>
          <MouseParallaxChild factorX="{0.03}" factorY="{0.05}">
            <img style={{width: '300px', height: '300px'}} src={one} alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX="{0.07}" factorY="{0.08}">
            <img style={{width: '300px', height: '300px'}} src={two} alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX="{0.07}" factorY="{0.08}">
            <img src={three} alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX="{0.07}" factorY="{0.08}">
            <img src={four} alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX="{0.07}" factorY="{0.08}">
            <img src={five} alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX="{0.07}" factorY="{0.08}">
            <img src={six} alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX="{0.07}" factorY="{0.08}">
            <img src={seven} alt="" />
          </MouseParallaxChild>
          {/*<MouseParallaxChild factorX="{0.07}" factorY="{0.08}">
            <img src={LogoS} alt="" />
          </MouseParallaxChild>*/}
        </MouseParallaxContainer>
          <br />
        </span>
      </div>
    </div>
  )
}

export default Layout
