'use client'

import React from 'react'
import { useEntryContext } from '../context/EntryContext'
import { getDate, getShortFormatDate } from '../utils/dateUtil';
import "./daySummary.css"

const DaySummary = () => {
  const {state, dispatch} = useEntryContext();

  const summaryDate = getShortFormatDate(new Date());

  const entireSummary = state[getDate()]["entries"]
  console.log(entireSummary)
  const selectSummary = entireSummary.filter(entry => {
    return entry.selected === true
  })
  if (selectSummary.length < 1) {
    return <h1>There was a mistake, no items were selected!</h1>
  }
  const heartSummary = selectSummary.filter(entry => {
    return entry.reaction === "heart"
  })
  const likeSummary = selectSummary.filter(entry => {
    return entry.reaction === "like"
  })
  const normalSummary = selectSummary.filter(entry => {
    return entry.reaction === "none"
  })
  const dislikeSummary = selectSummary.filter(entry => {
    return entry.reaction === "dislike"
  })
  const badDay = heartSummary.length === 0 && likeSummary.length === 0 && normalSummary.length === 0

  console.log(entireSummary, selectSummary, selectSummary, heartSummary)

  return (
    <main className="daySummary-container">
      <h1>{summaryDate}</h1>
      {heartSummary.length > 0 && 
        <section>
          <h2>Today's highlights: </h2>
            <ul>
              {heartSummary.map((entry,i) => {
              return <li key={i}>{entry.name}</li>
              })}
            </ul>
        </section>
      }
      {likeSummary.length > 0 && 
        <section>
          <h2>Honorable Mentions:</h2>
          <ul>
            {likeSummary.map((entry, i) => {
              return <li key={i}>{entry.name}</li>
            })}
          </ul>
        </section>
      }
      {normalSummary.length > 0 && 
        <section>
          <ul>
            {normalSummary.map((entry, i) => {
              return <li key={i}>{entry.name}</li>
            })} 
          </ul>
        </section>
      }
      {/* If all of the selected items are disliked..you had a bad day */}
      {badDay &&
        <section>
          <h1>Tomorrow's a new day..</h1>
          <ul>
            {dislikeSummary.map((entry, i) => {
              return <li key={i}>{entry.name}</li>
            })}
          </ul>
        </section>
      }
    </main>
  )
}

export default DaySummary
