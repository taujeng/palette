
import DailyTask from "./components/daily/dailyTask/DailyTask"

export default function Home() {
  return (
    <main className="">
      <h1>Day</h1>
      <div className="task-container">
        <DailyTask />
      </div>
    </main>
  )
}
