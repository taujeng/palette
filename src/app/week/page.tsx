'use client'

import React from 'react'
import TimeMenu from '../components/timeMenu/TimeMenu'
import './week.css'
import { useEntryContext } from '../context/EntryContext'
import { getDate } from '../utils/dateUtil'

const Week = () => {
  const {state, dispatch} = useEntryContext();
  console.log(state)
  return (

    <div className="week-container">
      <TimeMenu time="week"/>
      The week page
      {state[getDate()] && state[getDate()].entries.map((x,i) => {
        return <h1 key={i}>{x.name}</h1>
      })}
      {/* {state[date] && state[date].entries.map((item, i) => 
        <DailyEntry key={i} entry={item} handleSelection={handleSelection} handleReaction={handleReaction}/>)} */}
    </div>
  )
}

export default Week