import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';

import { configure } from '@storybook/react';

function loadStories() {
    require('../src/stories');
}

configure(loadStories, module);
