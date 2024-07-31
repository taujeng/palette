`use client`

import React, {useState, useEffect} from 'react'
import { useEntryContext } from '@/app/context/EntryContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./weeklySummary.css"


interface WeeklySummaryProps {
    date: string;
    weekday: number
}

const WeeklySummary = ( {date, weekday}: WeeklySummaryProps ) => {
    const {state, dispatch} = useEntryContext();
    const [entries, setEntries] = useState([])

    const weekTitle= ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

    useEffect(()=> {
        const entries = state[date]?.entries
        if (entries) {
            const selected = entries && entries.filter((item:any) => item.selected === true)
            console.log(selected)
            console.log(entries)
            setEntries(selected);
        } else {
            setEntries([]);
        }
    }, [date, state])
    console.log(state[date])


    return (
        <div className="weeklySummary-container">
            <div className="weeklyTitle">
                {weekTitle[weekday]}
            </div>
            <div className="weeklySummary-content">
                {entries && entries.map((item:any, i:number) => 
                (<FontAwesomeIcon key={i} icon={item.icon} className="weeklySummary-icon"/>))}
            </div>
        </div>
    )
}

export default WeeklySummary
