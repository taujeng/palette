import React from 'react'
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div>Designed and Developed by fischer</div>
      <div>©{currentYear}</div>
    </div>
  )
}

export default Footer