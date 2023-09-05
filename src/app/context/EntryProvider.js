'use client'

import React, {useReducer} from "react";
import { EntryContext, initialState, entryReducer } from "./EntryContext";

const EntryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entryReducer, initialState);

  return (
    <EntryContext.Provider value={{ state, dispatch }}>
      {children}
    </EntryContext.Provider>
  );
};

export default EntryProvider;
