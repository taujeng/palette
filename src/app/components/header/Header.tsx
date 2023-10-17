import React from 'react'
import Link from 'next/link'
import './header.css'

const Header = () => {
  return (
    <header className="header-container">
      <Link href="/"><img src="images/logo/logo svg 1.svg" alt="my palette logo" /></Link>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/stats">Stats</Link></li>
          <li><Link href="/support">Support</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header