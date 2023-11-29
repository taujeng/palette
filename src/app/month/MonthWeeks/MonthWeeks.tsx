'use client'

import React from 'react'
import MonthDays from '../MonthDays/MonthDays'
import './monthWeeks.css'

const MonthWeeks = ({week, month}) => {
  return (
    <div className="monthWeek-container">
      {week.map((day, i) => {
        return <MonthDays key={i} day={day} month={month} />
      })}
    </div>
  )
}

export default MonthWeeks