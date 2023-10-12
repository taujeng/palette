import React from 'react'
import TimeMenu from '../components/timeMenu/TimeMenu'
import './week.css'

const Week = () => {
  return (

    <div className="week-container">
      <TimeMenu time="week"/>
      The week page
    </div>
  )
}

export default Week