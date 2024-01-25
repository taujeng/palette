'use client'

import React, { createContext, useReducer, useContext, useEffect, useState } from "react";
import {getDate, getWeekDay} from "../utils/dateUtil.js";
import { v4 as uuidv4 } from 'uuid';

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
      // action.payload: The entire entry object
      // eg. {id: "asdf", name:"eg", selected:true, reaction:"dislike"}

      // Since we're just toggling "selected"'s value, we really only need the entry's id
      const copyEntryArray = [...state[getDate()].entries]
      const toUpdateObject = copyEntryArray.find(obj => obj.id === action.payload.id)
      toUpdateObject.selected = !toUpdateObject.selected
      // Once an entry is no longer selected, also remove any reactions it might have
      if (toUpdateObject.selected === false) toUpdateObject.reaction = "none"
      const index1 = copyEntryArray.findIndex(obj => obj.id === action.payload.id)
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
      // action.payload: The entire entry object
      // eg. {id: "asdf", name:"eg", selected:true, reaction:"dislike"}

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
        if (entry.id === action.payload.id) {
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
      // action.name: "School":string , action.color: "Red":string
      // action.icon: {iconName: "basketball", prefix: "fas", icon: [... svg path]} : Object

      // May need to add error handling if user adds entry for a new day that isn't listed yet

      const newEntry = {
        id: uuidv4(),
        name: action.name,
        category: action.color,
        selected: false,
        reaction: "none",
        icon: action.icon,
      }

      const stateAfterNewEntry = {
        ...state, [getDate()] : {
          ...state[getDate()],
          entries: [
            ...state[getDate()].entries,
            newEntry
          ]
        }
      }

      // Save to Local Storage
      localStorage.setItem("myPalette", JSON.stringify(stateAfterNewEntry));      
      return stateAfterNewEntry;

    case "REMOVE_ENTRY":
      //action.id = Entry ID, eg. "20cc6978-7080-4f19-b434-312a231d1b23":string
      const newEntries = [...state[getDate()].entries].filter(entry => entry.id !== action.id)

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
      
    case "UPDATE_COLORPALETTE":
      //action.payload = palette object, eg. {#92b3dc: {title: "School", show: true}, ect.}
      
      const stateAfterColorPalette = {
        ...state,
        [getDate()]: {
          ...state[getDate()],
          palette: action.payload
        }
      }

      // Save to Local Storage
      localStorage.setItem("myPalette", JSON.stringify(stateAfterColorPalette))
      return stateAfterColorPalette;

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
