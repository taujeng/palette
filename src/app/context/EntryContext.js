'use client'

import React, { createContext, useReducer, useContext, useEffect } from "react";
import {getDate, getWeekDay} from "../utils/dateUtil.js";

// Define an initial state for your entries
const initialState = {
  [getDate()] : {
    entries: [
      // {name: "School", category: "#03c04a", selected: true, reaction: "dislike"},
      // {name: "Health", category: "#03c04a", selected: true, reaction: "heart"},
      // {name: "Fitness", category: "#03c04a", selected: true, reaction: "like"},
      // {name: "Games", category: "blue", selected: false, reaction: "none"},
      // {name: "Family", category: "blue", selected: false, reaction: "none"},
      // {name: "Event", category: "red", selected: false, reaction: "none"},
    ],
    weekday: [getWeekDay()]
  }


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
    case "END_DAY":

      return 
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

export { EntryContext, useEntryContext, entryReducer, initialState };
