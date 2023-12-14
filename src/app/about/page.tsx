import React from 'react'
import Link from 'next/link';
import './about.css'

const About = () => {
  return (
    <div className="about-container">
      <h1>About</h1>
      <div className="about-text">
        <p>palette is still under construction! You can see all recent updates at <Link href="./whatsNew">What's New</Link>.</p>
        <p>Feedback would be greatly appreciated. If you have any suggestions, criticisms, or just want to say hello, feel free to reach out to me via email at <a href="mailto:taujeng.1@gmail.com">taujeng.1@gmail.com</a>.</p>
      </div>
      <img src="./images/about/girl-writing.jpg" alt="girl jotting notes" />
    </div>
  )
}

export default About;