'use client'

import React, { createContext, useReducer, useContext } from "react";

// Define an initial state for your entries
const initialState = {
  entryText: "",
  entryColor: "",
  entries: [
    {name: "School", category: "#03c04a", selected: true, reaction: "dislike"},
    {name: "Health", category: "#03c04a", selected: true, reaction: "heart"},
    {name: "Fitness", category: "#03c04a", selected: true, reaction: "like"},
    {name: "Games", category: "blue", selected: false, reaction: "none"},
    {name: "Family", category: "blue", selected: false, reaction: "none"},
    {name: "Event", category: "red", selected: false, reaction: "none"},
  ],
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
    case "SHOW_NEW_ENTRY":
      return { ...state, showNewEntry: action.payload };
    case "SET_ENTRY_TEXT":
      return { ...state, entryText: action.payload };
    case "SET_ENTRY_COLOR":
      return { ...state, entryColor: action.payload };
    case "ADD_ENTRY":
      return {
        ...state,
        entries: [...state.entries, action.payload],
        entryText: "",
        entryColor: "",
      };
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
