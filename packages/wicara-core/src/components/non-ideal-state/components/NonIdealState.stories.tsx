import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { StoryContainer, StoryHeader, StorybookWrapper } from '../../../utils/storybook';

import { Paragraph } from '../../../foundations';
import NonIdealState from './NonIdealState';

const readme = require('../README.md');

const story = storiesOf('Core|Components/Non-Ideal State', module).addDecorator(StorybookWrapper);

story.add(
  'default',
  () => (
    <StoryContainer>
      <StoryHeader
        title="Non-Ideal State"
        subtitle="Used to inform users that some contents are unavailable."
      />
      <NonIdealState
        image={
          <img
            src="https://platform.katalabs.io/static/media/no-channel.dcd0c908.svg"
            alt="No Project Selected"
          />
        }
        title="No Project Selected"
      >
        <Paragraph m={0}>
          You have not selected a project. Please select one from the dropdown on the left.
        </Paragraph>
      </NonIdealState>
    </StoryContainer>
  ),
  {
    notes: {
      markdown: readme
    }
  }
);
