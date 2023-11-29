'use client'

import React from 'react'
import TimeMenu from '../components/timeMenu/TimeMenu';
import './month.css'
import { getMonthDays } from '../utils/dateUtil';
import MonthDays from './MonthDays/MonthDays';
import MonthWeeks from './MonthWeeks/MonthWeeks';

const Month = () => {

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
  const firstWeekDay = new Date(2023, cMonth, 1).getDay();

  let week1 = new Array(7).fill(null);
  let arrOfWeeks = [];
  const numberOfWeeks = 5;
  for (let i = 0; i < numberOfWeeks; i++) {
    let week = new Array(7).fill(null);
    arrOfWeeks.push(week);
  }
  console.log(daysOfMonth)
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
  console.log(arrOfWeeks);

  const weekTitles = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className="month-container">
      <TimeMenu time="month"/>
      <h2>{currentDate.toLocaleDateString('en-US', { month: 'long' })}</h2>
      <div className="weekDay-title-container">
        {weekTitles.map((title, i) => {
          return <div key={i} className="weekDay-title">{title}</div>
        })}
      </div>
      {arrOfWeeks.map((week, i) => {
        return <MonthWeeks key={i} week={week} month={cMonth}/>
      })}
      {/* {arrOfWeeks.map((week, i) => {
        return week.map((day, i) => {
          return <MonthDays key={i} day={day} month={cMonth}/>
        })
      })} */}
    </div>
  )
}

export default Month;