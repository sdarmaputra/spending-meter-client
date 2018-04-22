import { configure, addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
addDecorator((storyFn, contect) => withConsole()(storyFn)(context))
