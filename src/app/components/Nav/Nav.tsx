'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import './nav.css'
import { Cross as Hamburger } from 'hamburger-react'


const Nav = () => {
  const [mobileMode, setMobileMode] = useState(false);
  return (
    <header className="nav-container">
      {/* <Link href="/"><img src="images/logo/logo svg 1.svg" alt="my palette logo" /></Link> */}
      <Link href="/"><img src="images/logo/paint-blue.png" alt="palette logo" /></Link>
      <nav>
        <div className="mobile-nav">
          <Hamburger toggled={mobileMode} toggle={setMobileMode}></Hamburger>
          {mobileMode &&
          <div className="mobile-nav-links">
            <ul>
              <li onClick={()=>setMobileMode(false)}><Link href="/day">Journal</Link></li>
              <li onClick={()=>setMobileMode(false)}><Link href="/whatsNew">{`What's New`}</Link></li>
              <li onClick={()=>setMobileMode(false)}><Link href="/about">About</Link></li>
            </ul>
          </div> 
          }
        </div>
        <ul className="nav-links">
          <li><Link href="/day">Journal</Link></li>
          {/* <li><Link href="/stats">Stats</Link></li> */}
          <li><Link href="/whatsNew">{`What's New`}</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav