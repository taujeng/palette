'use client'

import React from 'react'
import { useEntryContext } from '../context/EntryContext'
import { getDate } from '../utils/dateUtil';

const DaySummary = () => {
  const {state, dispatch} = useEntryContext();

  const entireSummary = state[getDate()]["entries"]
  const selectSummary = entireSummary.filter(entry => {
    return entry.selected
  })
  const heartSummary = selectSummary.filter(entry => {
    return entry.reaction === "heart"
  })

  console.log(state[getDate()], selectSummary, heartSummary)

  return (
    <div>
      {state[getDate()]["entries"].map((x, i) => {
        return (<h1 key={i}>{x.name}</h1>)
      })}
    </div>
  )
}

export default DaySummary
