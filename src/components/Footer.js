import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
      <h3>
        {" "}
        F2k.<span style={{ color: "#FFC907" }}>Stream</span>
      </h3>
      <p>F2k.Stream is a Online Streaming Movies you can watch  <br/> Anythime and Anywhere</p>
      <div className="socials" id="medsos">
        {/* <p id="hit">Hit Me Up</p> */}
        <li>
          <Link to={"https://www.instagram.com/fadelmuhamadp/"} target="_blank" >
          <FontAwesomeIcon icon={faMessage} beat />
          </Link>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/fadel-muhamad-prianto-009480150/"
            target="_blank"
          >
                     <FontAwesomeIcon icon={faInbox} beat style={{color: "#f7f7f7",}} />

          </a>
        </li>
        <li>
          <a href="https://twitter.com/fadelmuhamadp" target="_blank">
          <FontAwesomeIcon icon={faUser} beat />

          </a>
        </li>
        <p />
      </div>
      <div className="footer-bottom">
        <p>copyright ©2023 F2k. Designed by Fadel</p>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer
