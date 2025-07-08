import InboxScreen from "./InboxScreen";
import { Provider } from "react-redux";
import store from "../lib/store";
import { MockedState } from "./TaskList.stories";
import { http, HttpResponse } from "msw";
import { fireEvent, waitForElementToBeRemoved, within, waitFor } from "@storybook/test";

export default {
  component: InboxScreen,
  title: "InboxScreen",
  tags: ["autodocs"],
  decorators: [(story) => 
    <Provider store={store}>
      {story()}
    </Provider>]
}

export const Default = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://jsonplaceholder.typicode.com/todos?userId=1", 
        () => {
          return HttpResponse.json(MockedState.tasks)
        })
      ]
    }
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    await waitForElementToBeRemoved(await canvas.findByTestId("loading"))
    await waitFor(async() => {
      await fireEvent.click(canvas.getByLabelText("pinTask-1"))
      await fireEvent.click(canvas.getByLabelText("pinTask-3"))
      await fireEvent.click(canvas.getByLabelText("archiveTask-5"))
    })
  },
}

export const Error = {
  parameters: {
    msw: {
      handlers: {
        auth: http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
          return HttpResponse.json(null, { status: 403 })
        }),
      },
    },
  },
}
