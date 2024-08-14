'use client'

import React, { useState, useEffect } from 'react'
import "./week.css"
import { useEntryContext } from '../context/EntryContext'
import { getDate, getDateObject, getFormatDate } from '../utils/dateUtil'
import JournalLayout from '../components/journalLayout/JournalLayout'
import WeeklyEntry from '../components/weekly/weeklyEntry/weeklyEntry'
import { v4 as uuidv4 } from 'uuid';
import { MyEntryObject } from '../utils/interfaceLibrary'
import DailyEntry from '../components/dayUse/dailyEntry/DailyEntry'
import { useEntryManagement } from '../hooks/useEntryManagement'
import WeeklySummary from '../components/weekly/weeklySummary/WeeklySummary'


const Week = () => {
  const {state, dispatch} = useEntryContext();
  const { handleSelection, handleReaction, handleRemoval } = useEntryManagement();
  const [chosenWeekDay, setChosenWeekDay] = useState<string>(getFormatDate(new Date()));
  const [weekDates, setWeekDates] = useState<string[]>(Array(7).fill(null));
  const [selectedEntries, setSelectedEntries] = useState<any[]>([]);

  useEffect(() => {
    const weekDays = Array(7).fill(false);
    const currentDay = getDateObject(chosenWeekDay);
    const currentDayIndex = currentDay.getDay();
    for (let i = 0; i < 7; i++) {
      const diff = i - currentDayIndex;
      const newDate = new Date(currentDay);
      newDate.setDate(currentDay.getDate() + diff);
      weekDays[i] = getFormatDate(newDate);
    }
    setWeekDates(weekDays)
  }, [chosenWeekDay])

  useEffect(() => {
    const allEntries = state[chosenWeekDay]?.entries.filter(
      (entry: { [key: string]: any }) => entry["selected"] === true)

    setSelectedEntries(allEntries || []);  
  }, [state, chosenWeekDay]);

  const emptyPhrases = [
    "No plans yet...",
    "This day is open for possibilities!",
    "A blank slate.",
    "Nothing here yet...",
    "A blank canvas ready for your activities."
  ]

  const randomPhrase = emptyPhrases[Math.floor(Math.random()* emptyPhrases.length)]

  const changeWeekDay = (day: string) => {
    setChosenWeekDay(day);
  }



  return (
    <div className="week-container">
      <JournalLayout startingTab="week-tab">
        <div className="week-content">
          <div className="week-left">
            {weekDates[0] ? 
              weekDates.map((date:string, i: number) => (
                <WeeklySummary 
                  key={i} 
                  date={date} 
                  weekday={i} 
                  changeWeekDay={changeWeekDay}
                  isActive={chosenWeekDay === date}
                  />
              ))
            : ("Loading...")}
          </div>
          <div className="week-right">
            {selectedEntries.length > 0 ?
              (selectedEntries.map((item:MyEntryObject, i:number) => 
                <DailyEntry 
                  key={i}
                  index={i}
                  data={item}
                  handleSelection={handleSelection}
                  handleReaction={handleReaction}
                  handleRemoval={handleRemoval}
                />
              ))
              : 
              ( <p>{randomPhrase}</p>)
            }
          </div>
        </div>

      </JournalLayout>

    </div>
  )
}

export default Week;