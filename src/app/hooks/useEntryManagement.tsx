import { useState } from 'react'
import { useEntryContext } from '../context/EntryContext'
import { MyEntryObject } from '../utils/interfaceLibrary'

export const useEntryManagement = () => {
    const {state, dispatch} = useEntryContext();

    const handleSelection = (entry: MyEntryObject) => {
        dispatch({type: "UPDATE_SELECTION", payload: entry})
    }

    const handleReaction = (entry: MyEntryObject) => {
        dispatch({type: "UPDATE_REACTION", payload: entry})
    }

    const handleRemoval = (id:string) => {
        dispatch({type: "REMOVE_ENTRY", id: id})
    }
    return  {
        handleSelection, handleReaction, handleRemoval
    }
}