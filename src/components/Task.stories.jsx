import Task from "./Task"

export default {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
}

export const Default = {
  args: { //引数の指定
    task: {//Taskコンポーネントの引数
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    }
  }
}

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    }
  }
}

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    }
  }
}
