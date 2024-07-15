'use client'

import React, { useState, useEffect } from 'react'
import "./week.css"
import { useEntryContext } from '../context/EntryContext'
import { getDate, getFormatDate } from '../utils/dateUtil'
import JournalLayout from '../components/journalLayout/JournalLayout'
import WeeklyEntry from '../components/weekly/weeklyEntry/weeklyEntry'
import { v4 as uuidv4 } from 'uuid';
import { MyEntryObject } from '../utils/interfaceLibrary'
import DailyEntry from '../components/dayUse/dailyEntry/DailyEntry'
import { useEntryManagement } from '../hooks/useEntryManagement'

const Week = () => {
  const {state, dispatch} = useEntryContext();
  const { handleSelection, handleReaction, handleRemoval } = useEntryManagement();
  const [currentDate, setCurrentDate] = useState<string>(getDate());
  const [chosenWeekDay, setChosenWeekDay] = useState<number>(new Date().getDay());
  const [weekDates, setWeekDates] = useState<string[]>(Array(7).fill(null));
  const [selectedEntries, setSelectedEntries] = useState<any[]>([]);

  useEffect(() => {
    const weekDays = Array(7).fill(false);
    for (let i = 0; i < 7; i++) {
      if (i === chosenWeekDay) {
        weekDays[i] = getDate();
      } else {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + (i - chosenWeekDay));
        weekDays[i] = getFormatDate(newDate)
      }
    }
    setWeekDates(weekDays)
  }, [chosenWeekDay])

  useEffect(() => {
    const allEntries = state[weekDates[chosenWeekDay]]?.entries.filter(
      (entry: { [key: string]: any }) => entry["selected"] === true)

    setSelectedEntries(allEntries || []);  
    console.log(state.weekDates?.[chosenWeekDay])
  }, [state, weekDates, chosenWeekDay]);

  const today = state.weekDates?.[chosenWeekDay]?.entries
  console.log(state)

  console.log(state.weekDates?.[chosenWeekDay]?.mood)


  return (
    <div className="week-container">
      <JournalLayout startingTab="week-tab">
        <div className="week-content">
          <div className="week-left">

          </div>
          <div className="week-right">
            <div className="mood-container">
              {state[currentDate]?.mood}
            </div>
            {selectedEntries.length > 0 ?
              (selectedEntries.map((item:MyEntryObject, i:number) => 
                <DailyEntry 
                  index={i}
                  data={item}
                  handleSelection={handleSelection}
                  handleReaction={handleReaction}
                  handleRemoval={handleRemoval}
                />
              ))
              : 
              ( <p>No Entries</p>)
            }
            {/* {selectedEntries.length > 0 ?
              (selectedEntries.map((item:MyEntryObject, index:number) => 
                (<WeeklyEntry key={uuidv4()} data={item}/>)
              ))
              : 
              ( <p>No Entries</p>)
            } */}
          </div>
        </div>

      </JournalLayout>

    </div>
  )
}

export default Week;