`use client`

import React, {useState, useEffect} from 'react'
import { useEntryContext } from '@/app/context/EntryContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear, faFaceAngry, faFaceMeh, faFaceGrinHearts, faFaceSmileBeam} from "@fortawesome/free-regular-svg-icons";
import { prioritySort } from '../../../utils/priorityUtil';
import "./weeklySummary.css"


interface WeeklySummaryProps {
    date: string;
    weekday: number
    changeWeekDay: (day:string) => void;
    isActive: boolean;
}

const WeeklySummary = ( {date, weekday, changeWeekDay, isActive}: WeeklySummaryProps ) => {
    const {state, dispatch} = useEntryContext();
    const [entries, setEntries] = useState([])

    const weekTitle= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const moodLibrary = {angry : faFaceAngry, sad: faFaceSadTear, meh: faFaceMeh, happy: faFaceSmileBeam, love: faFaceGrinHearts}

    useEffect(()=> {
        const entries = state[date]?.entries
        if (entries) {
            const selected = entries && entries.filter((item:any) => item.selected === true)
            const mood = state[date]?.mood 
            const sortedEntries = prioritySort(selected, mood);
            setEntries(sortedEntries.slice(0,5));
        } else {
            setEntries([]);
        }
    }, [date, state])


    return (
        <div className={`weeklySummary-container ${isActive && "active"}`} onClick={() => changeWeekDay(date)}>
            <div className="weeklyTitle">
                {weekTitle[weekday]}
            </div>
            <div className="weeklySummary-content">
                {entries && entries.map((item:any, i:number) => 
                (<FontAwesomeIcon key={i} icon={item.icon} className="weeklySummary-icon"/>))}
            </div>
            <div className="weeklySummary-mood">
                {state[date]?.mood ? <FontAwesomeIcon icon={moodLibrary[state[date].mood as keyof typeof moodLibrary]}/> : null}
            </div>
        </div>
    )
}

export default WeeklySummary
