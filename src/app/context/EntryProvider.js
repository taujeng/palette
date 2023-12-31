'use client'

import React, {useReducer, useState, useEffect, useLayoutEffect} from "react";
import { getDate, getWeekDay } from "../utils/dateUtil";
import { EntryContext, entryReducer, InitialState } from "./EntryContext";
import { v4 as uuidv4 } from 'uuid';
import { faDumbbell, faSun, faCartShopping, faDragon} from "@fortawesome/free-solid-svg-icons";

const EntryProvider = ({ children }) => {
  const [startingData, setStartingData] = useState({[getDate()] : {entries: [
  ]}, weekday: [getWeekDay(new Date())],
  }) 
    
  useEffect(() => {
    const getLocalData = localStorage.getItem('myPalette');
    // if there's nothing in localStorage, use this as a starter pack
    let startingData = getLocalData
      ? JSON.parse(getLocalData)
      : {[getDate()] : {entries: [
        {id: uuidv4(), name: "Gym", category: "#03c04a", selected: false, reaction: "none", icon: faDumbbell},
        {id: uuidv4(), name: "touched grass", category: "blue", selected: false, reaction: "none", icon: faSun},
        {id: uuidv4(), name: "grocery shopping", category: "#03c04a", selected: false, reaction: "none", icon: faCartShopping},
        {id: uuidv4(), name: "fed pet dragon", category: "red", selected: false, reaction: "none", icon: faDragon},
      ]}, weekday: getWeekDay(new Date()),
      };
  
    // If it's a new day (startingData doesn't include today's date), create a new diary page
    // with a new date, and with entries based off the most recent diary page 

    // so first grab most recent entry
    const mostRecentDate = Object.keys(startingData).reduce((maxDate, currentDate) => {
      const currentTime = new Date(currentDate).getTime();
      return currentTime > maxDate.timestamp ? { timestamp: currentTime, date: currentDate } : maxDate;
    }, { timestamp: 0, date: "" });
    const recentEntries = startingData[mostRecentDate.date].entries;
    // new diary page's entries need to be clean
        const cleanRecentEntries = recentEntries.map((item)=> {
          return { ...item, selected: false, reaction: "none" };
        })
  
    if (startingData[getDate()] == undefined) {
      startingData = {
        [getDate()] : {
          entries: cleanRecentEntries,
          weekday: getWeekDay(new Date())
        },
        ...startingData
      }  
    }  
    // Save/Initialize to Local Storage
    localStorage.setItem("myPalette", JSON.stringify(startingData));
    setStartingData(startingData)
  }, []);

  const [state, dispatch] = useReducer(entryReducer, startingData);

  // Trigger a re-render with the updated state after setting startingData
  useEffect(() => {
        dispatch({ type: 'INIT_LOCAL_STORAGE', payload: startingData });
  },[startingData]);


  return (
    <EntryContext.Provider value={{ state, dispatch }}>
      {children}
    </EntryContext.Provider>
  );
};

export default EntryProvider;
