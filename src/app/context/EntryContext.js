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

      const copyEntryArray = [...state[getDate()].entries]
      const toUpdateObject = copyEntryArray.find(obj => obj.name === action.payload.name)
      toUpdateObject.selected = !toUpdateObject.selected
      const index1 = copyEntryArray.find(obj => obj.name === action.payload.name)
      copyEntryArray[index1] = toUpdateObject;

      const updateSelection = {
        ...state, [getDate()] : {
          ...state[getDate()],
          entries: copyEntryArray
        }
      }

      // const newSelectionArray = [...state[getDate()].entries].filter( entry => {
      //   if (entry.name === action.payload.name) {
      //     entry.selected = action.payload.selected;
      //   }
      //   return entry;
      // })
      // const updateSelection = {
      //   ...state, [getDate()] : {
      //     ...state[getDate()],
      //     entries: newSelectionArray
      //   }
      // }

      // Save to Local Storage
      localStorage.setItem("myPalette", JSON.stringify(updateSelection)); 

      return updateSelection;
    case "UPDATE_REACTION":
      // state[getDate()].entries -> [{name:"Gym", selected: true, reaction: "dislike"}, {name:"Health", ...}, ...]

      // const copyDayEntries = [...state[getDate()].entries]

      // const updateObject = copyDayEntries.find((obj) => obj.name === action.payload.name)

      // const copyUpdateObject = {...updateObject};

      // copyUpdateObject.selected = true;
      // copyUpdateObject.reaction = copyUpdateObject.reaction === action.payload.reaction ?
      //   "none" : action.payload.reaction;

      // const index = copyDayEntries.findIndex(obj => obj.name === action.payload.name)
      // copyDayEntries[index] = copyUpdateObject;

      // const updateReaction = {
      //   ...state,
      //   [getDate()]: {
      //     ...state[getDate()],
      //     entries: copyDayEntries
      //   }
      // }

      // console.log(updateReaction)
      
      // // Save to Local Storage
      // localStorage.setItem("myPalette", JSON.stringify(updateReaction)); 

      // return updateReaction
      const updatedEntries = state[getDate()].entries.map(entry => {
        if (entry.name === action.payload.name) {
          return {
            ...entry,
            selected: true,
            reaction: entry.reaction === action.payload.reaction ? "none" : action.payload.reaction,
          };
        }
        return entry;
      });
    
      const updatedState = {
        ...state,
        [getDate()]: {
          ...state[getDate()],
          entries: updatedEntries,
        },
      };
    
      // Save to Local Storage
      localStorage.setItem("myPalette", JSON.stringify(updatedState));
    
      return updatedState;
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

    case "REMOVE_ENTRY":
      //action.payload = Entry's name, eg. "School":string
      const newEntries = [...state[getDate()].entries].filter(entry => entry.name !== action.payload);
      console.log(newEntries)
      const stateAfterRemoveEntry = {
        ...state,
        [getDate()]: {
          ...state[getDate()],
          entries: newEntries
        }
      }

      // Save to Local Storage
      localStorage.setItem("myPalette", JSON.stringify(stateAfterRemoveEntry))
      return stateAfterRemoveEntry;
      
      

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
