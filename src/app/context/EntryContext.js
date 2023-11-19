'use client'

import React, { createContext, useReducer, useContext, useEffect, useState } from "react";
import {getDate, getWeekDay} from "../utils/dateUtil.js";

// Initialize state
const InitialState = () => {
  const getLocalData = localStorage.getItem('myPalette');
  // if local data doesn't exist, use this as a starter pack
  let startingData = getLocalData
    ? JSON.parse(getLocalData)
    : {[getDate()] : {entries: [
      {name: "School", category: "#03c04a", selected: true, reaction: "dislike"},
      {name: "Cooking", category: "#03c04a", selected: true, reaction: "heart"},
      {name: "Gym", category: "#03c04a", selected: true, reaction: "like"},
      {name: "TV Show", category: "blue", selected: false, reaction: "none"},
      {name: "Self Care", category: "blue", selected: false, reaction: "none"},
      {name: "Event", category: "red", selected: false, reaction: "none"},
    ]}, weekday: [getWeekDay()],
    };

  // If it's a new day (startingData doesn't include today's date), create a new diary page
  // with a new date, and with entries based off the most recent diary page 
  const mostRecentDate = Object.keys(startingData).reduce((maxDate, currentDate) => {
    const currentTime = new Date(currentDate).getTime();
    return currentTime > maxDate.timestamp ? { timestamp: currentTime, date: currentDate } : maxDate;
  }, { timestamp: 0, date: "" });
  const recentEntries = startingData[mostRecentDate.date].entries;
  // new diary page's entries need to clean
  const cleanRecentEntries = recentEntries.map((item)=> {
    item.selected = false;
    item.reaction = "none";
    return item;
  })

  if (startingData[getDate()] == undefined) {
    startingData = {
      [getDate()] : {
        entries: cleanRecentEntries,
        weekday: [getWeekDay()]
      }
    }  
  }  
  // Save/Initialize to Local Storage
  localStorage.setItem("myPalette", JSON.stringify(startingData));
  return startingData;
};

// Create a reducer function to handle actions
const entryReducer = (state, action) => {
  /* action contains {
    type: ,
    payload: ,
    } 
    as defined in the dispatch
  */
  switch (action.type) {
    case "INIT_LOCAL_STORAGE" :
      return action.payload;
    case "UPDATE_SELECTION":
      const newSelectionArray = [...state[getDate()].entries].filter( entry => {
        if (entry.name === action.payload.name) {
          entry.selected = action.payload.selected;
        }
        return entry;
      })
      const updateSelection = {
        ...state, [getDate()] : {
          ...state[getDate()],
          entries: newSelectionArray
        }
      }

      // Save to Local Storage
      localStorage.setItem("myPalette", JSON.stringify(updateSelection)); 

      return updateSelection;
    case "UPDATE_REACTION":
      const newReactionArray = [...state[getDate()].entries].filter( entry => {
        if (entry.name === action.payload.name) {
          entry.reaction = action.payload.reaction
        }
        return entry;
      })
      const updateReaction = {
        ...state,
        [getDate()]: {
          ...state[getDate()],
          entries: newReactionArray
        }
      }

      
      // Save to Local Storage
      localStorage.setItem("myPalette", JSON.stringify(updateReaction)); 

      return updateReaction
    case "ADD_ENTRY":
      // May need to add error handling if user adds entry for a new day that isn't listed yet


      const updatedData = {
        ...state, [getDate()] : {
          ...state[getDate()],
          entries: [
            ...state[getDate()].entries,
            action.payload
          ]
        }
      }

      // Save to Local Storage
      localStorage.setItem("myPalette", JSON.stringify(updatedData));      
      return updatedData;


    // Add more cases for other actions as needed
    default:
      return state;
  }
};

// Create the EntryContext using createContext
const EntryContext = createContext();

// Create a custom hook to access the context
const useEntryContext = () => {
  const context = useContext(EntryContext);
  if (!context) {
    throw new Error("useEntryContext must be used within an EntryProvider");
  }
  return context;
};

export { EntryContext, useEntryContext, entryReducer, InitialState };
