'use client'

import React from 'react'
import TimeMenu from '../components/timeMenu/TimeMenu'
import './week.css'
import { useEntryContext } from '../context/EntryContext'
import { getDate, getFormatDate } from '../utils/dateUtil'
import WeeklyEntry from '../components/weekly/weeklyEntry/WeeklyEntry'

const Week = () => {
  const {state, dispatch} = useEntryContext();

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
      The week page
      {weekArr.map((item, i) => {
        return <WeeklyEntry key={i} day={item}/>
      })}
      {/* {state[getDate()] && state[getDate()].entries.map((x,i) => {
        return <h1 key={i}>{x.name}</h1>
      })} */}
      {/* {state[date] && state[date].entries.map((item, i) => 
        <DailyEntry key={i} entry={item} handleSelection={handleSelection} handleReaction={handleReaction}/>)} */}
    </div>
  )
}

export default Week