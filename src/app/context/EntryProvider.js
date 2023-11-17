'use client'

import React, {useReducer} from "react";
import { EntryContext, entryReducer, InitialState } from "./EntryContext";
import { getDate, getWeekDay } from "../utils/dateUtil";

const EntryProvider = ({ children }) => {
  // const initialState = {
  //   [getDate()] : {
  //     entries: [
  //       {name: "School", category: "#03c04a", selected: true, reaction: "dislike"},
  //       {name: "Health", category: "#03c04a", selected: true, reaction: "heart"},
  //       // {name: "Fitness", category: "#03c04a", selected: true, reaction: "like"},
  //       // {name: "Games", category: "blue", selected: false, reaction: "none"},
  //       // {name: "Family", category: "blue", selected: false, reaction: "none"},
  //       // {name: "Event", category: "red", selected: false, reaction: "none"},
  //     ],
  //     weekday: [getWeekDay()]
  //   }
  
  
  // };
  const initialData = InitialState();
  const [state, dispatch] = useReducer(entryReducer, initialData);


  console.log(`reached EntryProvider ${JSON.stringify(initialData)}`)
  return (
    <EntryContext.Provider value={{ state, dispatch }}>
      {children}
    </EntryContext.Provider>
  );
};

export default EntryProvider;
