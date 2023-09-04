'use client'
import { useState } from "react"
import DailyTask from "./components/daily/dailyTask/DailyTask"
import './day.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faSplotch, faStop, faCheck, faXmark, faThumbTack } from "@fortawesome/free-solid-svg-icons";


export default function Day() {
  const [showNewTask, setShowNewTask] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [taskColor, setTaskColor] = useState('');
  const [tasks, setTasks] = useState([
    {name: "School", category: "#03c04a", selected: true, reaction: "dislike"},
    {name: "Health", category: "#03c04a", selected: true, reaction: "heart"},
    {name: "Fitness", category: "#03c04a", selected: true, reaction: "like"},
    {name: "Games", category: "blue", selected: false, reaction: "none"},
    {name: "Family", category: "blue", selected: false, reaction: "none"},
    {name: "Event", category: "red", selected: false, reaction: "none"},
  
  ])

  const handleNewTask = (e) => {
    e.preventDefault();
    setShowNewTask(false);
    setTaskText("");
    setTaskColor("");

    const newTask = {
      name: taskText,
      category: taskColor,
      selected: false,
      reaction: "none",
    }
    setTasks([...tasks, newTask]);

  }

  return (
    <main className="day-container">
      <h1>Day</h1>
      <div className="task-container">
        {tasks.map((item, i) => <DailyTask key={i} task={item}/>)}
      </div>
      <button onClick={()=> setShowNewTask(!showNewTask)}><FontAwesomeIcon className="addTask-icon" icon={faCirclePlus}/></button>
      {showNewTask && (<div className="modal-dailyTask" onClick={() => setShowNewTask(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h3>Let's add something new!</h3>

          <form action="submit" onSubmit={handleNewTask}>
            <label htmlFor=""> New Item Name:
              <br />
              <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} maxLength={20} autoFocus required/>
            </label>
            <div className="modal-color-selector">
              Select a color category:
              <div className="modal-color-choices">
                <div className="modal-color-wrapper">
                  {taskColor === "red" && <span className="scribble"></span>}
                  <FontAwesomeIcon icon={faStop} className="color-icon color-red" 
                  onClick={() => setTaskColor("red")}/>
                </div>
                <div className="modal-color-wrapper">
                  {taskColor === "#03c04a" && <span className="scribble"></span>}
                  <FontAwesomeIcon icon={faStop} className="color-icon color-green"
                  onClick={() => setTaskColor("#03c04a")}/>
                </div>
                <div className="modal-color-wrapper">
                  {taskColor === "blue" && <span className="scribble"></span>}
                  <FontAwesomeIcon icon={faStop} className="color-icon color-blue"
                onClick={() => setTaskColor("blue")}/>
                </div>
              </div>
            </div>
            <div className="modal-end">
              <button onClick={() => setShowNewTask(false)}>
                <FontAwesomeIcon icon={faXmark} className="submit-icon"/>
              </button>
              <button type="submit">
                <FontAwesomeIcon icon={faCheck} className="submit-icon"/>
              </button>
          </div>
          </form>

        </div>
      </div>)}
    </main>
  )
}
