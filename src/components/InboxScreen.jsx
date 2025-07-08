import { useDispatch, useSelector } from "react-redux"
import TaskList from "./TaskList"
import { useEffect } from "react"
import { fetchTasks } from "../lib/store"

export default function InboxScreen() {
  const {error} = useSelector((state) => state.taskbox)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  if(error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad">
            <p className="title-message">Oh no!</p>
            <p className="subtitle-message">Something went wrong</p>
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">Taskbox</h1>
      </nav>
      <TaskList />
    </div>
  )
}
