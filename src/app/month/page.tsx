import React from 'react'
import TimeMenu from '../components/timeMenu/TimeMenu';
import './month.css'

const Month = () => {
  return (
    <div className="month-container">
      <TimeMenu time="month"/>
      monthly view
    </div>
  )
}

export default Month;