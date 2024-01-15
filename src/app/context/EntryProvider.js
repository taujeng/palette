'use client'

import React, {useReducer, useState, useEffect, useLayoutEffect} from "react";
import { getDate, getWeekDay } from "../utils/dateUtil";
import { EntryContext, entryReducer, InitialState } from "./EntryContext";
import { v4 as uuidv4 } from 'uuid';
import { faDumbbell, faSun, faCartShopping, faDragon, faSchool, faHeartPulse} from "@fortawesome/free-solid-svg-icons";

const EntryProvider = ({ children }) => {
  const [startingData, setStartingData] = useState({[getDate()] : {entries: [
  ]}, weekday: [getWeekDay(new Date())],
  }) 


    
  useEffect(() => {
    const getLocalData = localStorage.getItem('myPalette');

    const defaultPalette =     {
      "#2ecc71": {title: "Health and Fitness", show: true},
      "#9b59b6": {title: "daily chores", show: true},
      "#3498db": {title: "School", show: true},
      "#fb558c": {title: "Event", show: true},
      "#f1c40f": {title: "", show: false},
      "#fa2912": {title: "", show: false},
    };

    // if there's nothing in localStorage, use this as a starter pack
    let startingData = getLocalData
      ? JSON.parse(getLocalData)
      : {[getDate()] : {entries: [
        {id: uuidv4(), name: "Gym", category: "#2ecc71", selected: false, reaction: "none", icon: faDumbbell},
        {id: uuidv4(), name: "classes", category: "#3498db", selected: false, reaction: "none", icon: faSchool},
        {id: uuidv4(), name: "date night", category: "#fb558c", selected: false, reaction: "none", icon: faHeartPulse},
        {id: uuidv4(), name: "feed pet dragon", category: "#9b59b6", selected: true, reaction: "like", icon: faDragon},
      ]}, weekday: getWeekDay(new Date()),
        palette: defaultPalette
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
  
    // If older version, it may not have the palette keyword.
    const recentPalette = startingData[mostRecentDate.date].palette ?? defaultPalette;
  
    if (startingData[getDate()] == undefined) {
      startingData = {
        [getDate()] : {
          entries: cleanRecentEntries,
          weekday: getWeekDay(new Date()),
          palette: recentPalette
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
