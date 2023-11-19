'use client'

import React, {useReducer} from "react";
import { EntryContext, entryReducer, InitialState } from "./EntryContext";

const EntryProvider = ({ children }) => {
  const initialData = InitialState();
  const [state, dispatch] = useReducer(entryReducer, initialData);

  return (
    <EntryContext.Provider value={{ state, dispatch }}>
      {children}
    </EntryContext.Provider>
  );
};

export default EntryProvider;
