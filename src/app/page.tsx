'use client'
import { useState } from "react"
import DailyTask from "./components/daily/dailyTask/DailyTask"

export default function Home() {
  const [tasks, setTasks] = useState([
    {name: "School", selected: true, reaction: "dislike"},
    {name: "Health", selected: true, reaction: "heart"},
    {name: "Fitness", selected: true, reaction: "like"},
    {name: "Games", selected: false, reaction: "none"},
  
  ])
  return (
    <main className="">
      <h1>Day</h1>
      <div className="task-container">
        {tasks.map((item, i) => <DailyTask key={i} task={item}/>)}
      </div>
    </main>
  )
}
