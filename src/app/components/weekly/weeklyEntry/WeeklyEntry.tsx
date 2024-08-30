import React from 'react'
import { MyEntryObject } from '@/app/utils/interfaceLibrary';
import "./weeklyEntry.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faHeart, faCircleXmark } from "@fortawesome/free-solid-svg-icons";


interface WeeklyEntry {
    data: MyEntryObject;
}

const WeeklyEntry = ( {data}: WeeklyEntry) => {
    const dictionary: { [key: string]: any} = {
        like: faThumbsUp,
        dislike: faThumbsDown,
        heart: faHeart
    }

    return (
        <div className="weeklyEntry-container">
            <div className="weekly-top">
                <div className="dailyEntry-icon-container">{data.icon && <FontAwesomeIcon icon={data.icon} className="dailyEntry-icon" style={{color: data.category}}/>}</div>
                <div className="weeklyName">{data.name}</div>
            </div>
            <div className="weekly-bot">
                {data.reaction &&
                    <FontAwesomeIcon icon={dictionary[data.reaction]} className={`${data.reaction}`}></FontAwesomeIcon> 
                }
            </div>
        </div>
    )
}

export default WeeklyEntry
