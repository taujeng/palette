'use client'

import React, {useState} from 'react'
import TimeMenu from '../components/timeMenu/TimeMenu'
import './week.css'
import { getDate, getFormatDate } from '../utils/dateUtil'
import WeeklyEntry from '../components/weekly/weeklyEntry/WeeklyEntry'
import ColorPalette from '../components/modals/colorPalette/ColorPalette'

const Week = () => {
  const [showColorPalette, setShowColorPalette] = useState<boolean>(false);


  // Grab the dates for the last 7 days, including today
  const weekArr = [];
  for (let i = 6; i >= 0; i--) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() - i);
    weekArr.push(getFormatDate(newDate));
  }

  return (

    <div className="week-container">
      <TimeMenu time="week"/>
      <ColorPalette status={showColorPalette} setStatus={() => setShowColorPalette(!showColorPalette)} />
      <main>
        {weekArr.map((item, i) => {
          return <WeeklyEntry key={i} date={item}/>
        })}
      </main>
    </div>
  )
}

export default Week