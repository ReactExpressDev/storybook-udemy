import "../src/index.css"
import {initialize, mswLoader} from "msw-storybook-addon"

initialize();

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
  },
  loaders: [mswLoader]
};

export default preview;
