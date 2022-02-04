import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from '../../data'
import logo from '../../images/kimuto_logo.png'
import { Link } from 'react-router-dom'
import './topbar.css'

const Topbar = () => {
  const [show, setShow] = useState(false);
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    show ? linksContainerRef.current.style.height = `${linksHeight}px` : linksContainerRef.current.style.height = '0px'
    return () => {}
  }, [show])

  return (
    <nav>
        <div className="nav-center">
            <div className="nav-header">
              <Link to="/"><img src={logo} alt="logo" className='logo'/></Link>
              <button className="nav-toggle" onClick={()=> setShow(!show)}>
                <FaBars />
              </button>
            </div>
            <div className = 'links-container' ref={linksContainerRef} >
              <ul className="links" ref={linksRef} onClick={()=> setShow(!show)}>
               {links.map((link)=>{
                 const { id, url, text } = link;
                 return( <li key={id}><Link to={url}>{text}</Link></li> )
               })}
              </ul>  
            </div>
            <ul className="social-icons">
              {social.map((socialLink)=>{
                const { id, url, icon } = socialLink;
                return( <li key={id}><a href={url}>{icon}</a></li>  )
              })}
            </ul>
        </div>
    </nav>
  )
};

export default Topbar;
