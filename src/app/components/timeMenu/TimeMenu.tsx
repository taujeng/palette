'use client'

import React from 'react'
import "./timeMenu.css"

const TimeMenu = ( {time} ) => {
  const timeOptions = ["day", "week", "month"]
  // const newOptions = timeOptions.filter(x => {
  //   x == time
  // })
  // console.log(newOptions)
  return (
    <select name="timeMenu" id="timeMenu" onChange={(e) => window.location.href=e.target.value}>
      <option value={time}>{time}</option>
      {timeOptions.map((x,i) => {
        if (x !== time) return <option key={i} value={x}>{x}</option>
      })}
    </select>
  )
}

export default TimeMenu