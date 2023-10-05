import React from 'react'
import './Footer.css';



const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-links">
          <a href="#" className="how-to-use">
            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FF5C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.09003 8.99999C9.32513 8.33166 9.78918 7.7681 10.4 7.40912C11.0108 7.05015 11.7289 6.91893 12.4272 7.0387C13.1255 7.15848 13.7588 7.52151 14.2151 8.06352C14.6714 8.60552 14.9211 9.29151 14.92 9.99999C14.92 12 11.92 13 11.92 13" stroke="#FF5C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 17H12.01" stroke="#FF5C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
            <p>How to use the code snippets </p>
          </a>

          <a href="#" className=" add-snippet">
            <div className="icon add-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z" stroke="#FF5C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z" stroke="#FF5C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V15" stroke="#FF5C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 9V21" stroke="#FF5C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <p>add a  code snippet </p>
          </a>
        </div>
        <div className="footer-me">
          <a href="#">
            made by   - enos (lyznne)
          </a>
          <div className="smile">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 14.5C8 14.5 9.5 16.5 12 16.5C14.5 16.5 16 14.5 16 14.5" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 9.5H9.01" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 9.5H15.01" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <p> © 2023 Copyright </p>
        <a href="#">Code-snippets</a>
        <p>all rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer;
