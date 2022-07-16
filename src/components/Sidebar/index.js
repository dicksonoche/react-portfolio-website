import './index.scss'
import LogoS from '../../assets/images/my_bitmoji.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
// eslint-disable-next-line no-unused-vars
import { faHome, faUser, faEnvelope, faBriefcase, faMoon } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#2255ff" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#2255ff" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#2255ff" />
        </NavLink>
        <NavLink activeclassname="active" className="job-experience" to="/about">
          <FontAwesomeIcon icon={faBriefcase} color="#2255ff" />
        </NavLink>
      </nav>
          <ul>
            {/*<li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/simon-dickson/">
                    <FontAwesomeIcon icon={faMoon} color="#5a7ce7" />
                </a>
</li          >*/}
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/simon-dickson/">
                    <FontAwesomeIcon icon={faLinkedin} color="#2255ff" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/dicksonoche">
                    <FontAwesomeIcon icon={faGithub} color="#2255ff" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/Dickson_oche">
                    <FontAwesomeIcon icon={faTwitter} color="#2255ff" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dickson_oche/">
                    <FontAwesomeIcon icon={faInstagram} color="#2255ff" />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
