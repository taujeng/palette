'use client'

import React from 'react'
import { useEntryContext } from '../context/EntryContext'
import { getDate } from '../utils/dateUtil';

const DaySummary = () => {
  const {state, dispatch} = useEntryContext();

  console.log(state[getDate()])

  return (
    <div>
      {state[getDate()]["entries"].map((x, i) => {
        return (<h1 key={i}>{x.name}</h1>)
      })}
    </div>
  )
}

export default DaySummary
