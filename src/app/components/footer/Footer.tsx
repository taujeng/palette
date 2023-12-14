import React from 'react'
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div>Website developed by Tau</div>
      <div>©{currentYear} palette</div>
    </div>
  )
}

export default Footer