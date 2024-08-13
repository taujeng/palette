'use client'

import React, {useState} from 'react'
import './month.css'
import { getMonthDays, getDate } from '../utils/dateUtil';
import MonthDays from './MonthDays/MonthDays';
import MonthWeeks from './MonthWeeks/MonthWeeks';
import ColorPalette from '../components/modals/colorPalette/ColorPalette';
import { useEntryContext } from '../context/EntryContext';
import JournalLayout from '../components/journalLayout/JournalLayout';

const Month = () => {
  const {state, dispatch} = useEntryContext();

  // We're displaying only the current Month and all it's days.
  // Think of it as a 2D array. There's gonna be 4 arrays. One arr for one week
  // Think of the Index as WeekDays. 0 = Sunday, 1 = Monday
  // So we first need to match the first day with the weekday, and figure out the days that 
  // fit into the first week.
  // from there, shouldn't be too hard to find what fits into what week.

  // Get number of days in current Month
  const currentDate = new Date();
  const cMonth = currentDate.getMonth();
  const cYear = currentDate.getFullYear();
  const daysOfMonth = getMonthDays(cMonth)
  const firstWeekDay = new Date(cYear, cMonth, 1).getDay();

  // Account for cases where we need 5 arrays instead of 4
  const numberOfWeeks = (daysOfMonth - (7 - firstWeekDay)) / 7 > 4 ? 5 : 4

  // Create a 2D array as a calendar representation of the month
  // Each subarray corresponds to a week, and each element within the subarray represents a day of the month
  let arrOfWeeks = [];
  for (let i = 0; i <= numberOfWeeks; i++) {
    let week = new Array(7).fill(null);
    arrOfWeeks.push(week);
  }
  let dayNumber = 1;
  let week = 0;
  let weekDay = firstWeekDay;
  while (dayNumber <= daysOfMonth) {
    if (weekDay > 6) {
      week++
      weekDay = 0;
    }
    arrOfWeeks[week][weekDay] = dayNumber
    dayNumber++;
    weekDay++;
  }

  const weekTitles = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className="month-container">
      <JournalLayout startingTab="month-tab">
        <h2>{currentDate.toLocaleDateString('en-US', { month: 'long' })}</h2>
        <div className="weekDay-title-container">
          {weekTitles.map((title, i) => {
            return <div key={i} className="weekDay-title">{title}</div>
          })}
        </div>
        {arrOfWeeks.map((week, i) => {
          return <MonthWeeks key={i} week={week} month={cMonth}/>
        })}
      </JournalLayout>
    </div>
  )
}

export default Month;