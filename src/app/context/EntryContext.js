'use client'

import React, { createContext, useReducer, useContext, useEffect, useState } from "react";
import {getDate, getWeekDay} from "../utils/dateUtil.js";

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

export { EntryContext, useEntryContext, entryReducer };
