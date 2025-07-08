import TaskList from "./TaskList"
import * as TaskStories from "./Task.stories"
import store, { TasksSlice } from "../lib/store"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"

export const MockedState = {
  tasks: [
    {...TaskStories.Default.args.task, id: "1", title: "Task 1"},
    {...TaskStories.Default.args.task, id: "2", title: "Task 2"},
    {...TaskStories.Default.args.task, id: "3", title: "Task 3"},
    {...TaskStories.Default.args.task, id: "4", title: "Task 4"},
    {...TaskStories.Default.args.task, id: "5", title: "Task 5"},
    {...TaskStories.Default.args.task, id: "6", title: "Task 6"},
  ],
  status: "idle",
  error: null,
}

export default {
  component: TaskList,
  title: "TaskList",
  tags: ["autodocs"],
  decorators: [	// 要素は配列で定義する
    (story) => (		// =>の後ろは中括弧ではなく小括弧
      <Provider store={store}>
        <div style={{padding: "3rem", backgroundColor: "black"}}>
          {story()}
        </div>
      </Provider>
    )
  ],
  excludeStories: /.*MockedState$/
}

const Mockstore = ({taskboxState, children}) => ( //関数コンポーネント（大文字始まりにする）。childrenはprops.children
  <Provider store={configureStore({
    reducer: {
      taskbox: TasksSlice.reducer,  //preloadedStateのプロパティ名と同じにする
    },
    preloadedState: {
      taskbox: taskboxState,    //reducerのプロパティ名と同じにする
    }
  })}>{children}</Provider>
)

export const Default = {
  decorators: [
    (story) => 
      <Mockstore taskboxState={MockedState}>
        {story()}    {/* story()を引数childrenに渡している。この書き方だと自動的にchildrenに渡される？ */}
      </Mockstore>   //Mockstore関数コンポーネント
  ]
}

export const WithPinnedTasks = {
  decorators: [
    (story) => {
      const pinnedTasks = [
        ...MockedState.tasks.slice(0, 5),
        {id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED"}
      ]

      return (
        <Mockstore taskboxState={{...MockedState, tasks: pinnedTasks}}>
          {story()}
        </Mockstore>
      )
    }
  ]
}

export const Loading = {
  decorators: [
    (story) => (
      <Mockstore taskboxState={{...MockedState, status: "loading"}}>
        {story()}
      </Mockstore>
    )
  ]
}

export const Empty = {
  decorators: [
    (story) => (
      <Mockstore taskboxState={{...MockedState, tasks: []}}>
        {story()}
      </Mockstore>
    )
  ]
}
