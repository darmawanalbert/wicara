import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';

import {
  StoryContainer,
  StoryHeader,
  StorybookWrapper,
  ComponentBlock
} from '../../utils/storybook';
import OutlineButton from './OutlineButton';

const readme = require('./README.md');

const stories = storiesOf('Core|Components/Button/OutlineButton', module).addDecorator(
  StorybookWrapper
);

stories.add(
  'basic',
  () => (
    <StoryContainer>
      <StoryHeader title="Outline Button" subtitle="Outline-styled button for alternate styling." />
      <ComponentBlock title="Default Button">
        <OutlineButton
          type="button"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" style={{ marginRight: 16 }} onClick={action('button-click')}>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Primary Button">
        <OutlineButton
          type="button"
          variant="primary"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
        <OutlineButton
          type="button"
          variant="primary"
          style={{ marginRight: 16 }}
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Success Button">
        <OutlineButton
          type="button"
          variant="success"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
        <OutlineButton
          type="button"
          variant="success"
          style={{ marginRight: 16 }}
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Warning Button">
        <OutlineButton
          type="button"
          variant="warning"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
        <OutlineButton
          type="button"
          variant="warning"
          style={{ marginRight: 16 }}
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Destructive Button">
        <OutlineButton
          type="button"
          variant="destructive"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
        <OutlineButton
          type="button"
          variant="destructive"
          style={{ marginRight: 16 }}
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);

stories.add(
  'button states',
  () => (
    <StoryContainer>
      <StoryHeader
        title="Button States"
        subtitle="Left to right: default, hover, focus, disabled, loading"
      />
      <ComponentBlock title="Default Button">
        <OutlineButton type="button" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Primary Button">
        <OutlineButton type="button" variant="primary" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton
          type="button"
          variant="primary"
          className="hover"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton
          type="button"
          variant="primary"
          className="focus"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" variant="primary" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Success Button">
        <OutlineButton type="button" variant="success" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton
          type="button"
          variant="success"
          className="hover"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton
          type="button"
          variant="success"
          className="focus"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="success" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" variant="success" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Warning Button">
        <OutlineButton type="button" variant="warning" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton
          type="button"
          variant="warning"
          className="hover"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton
          type="button"
          variant="warning"
          className="focus"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="warning" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" variant="warning" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Destructive Button">
        <OutlineButton type="button" variant="destructive" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton
          type="button"
          variant="destructive"
          className="hover"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton
          type="button"
          variant="destructive"
          className="focus"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="destructive" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" variant="destructive" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);

stories.add(
  'additional props',
  () => (
    <StoryContainer>
      <StoryHeader
        title="Button Props"
        subtitle="Additional props to modify the look of the button."
      />
      <ComponentBlock title="Block Button">
        <OutlineButton type="button" variant="primary" block>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Loading">
        <OutlineButton
          type="button"
          size="sm"
          variant="primary"
          isLoading
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" isLoading>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="With Icons (left)">
        <OutlineButton
          type="button"
          size="sm"
          variant="primary"
          icon="add"
          iconPosition="left"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" icon="add" iconPosition="left">
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="With Icons (right)">
        <OutlineButton
          type="button"
          size="sm"
          variant="primary"
          icon="add"
          iconPosition="right"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" icon="add" iconPosition="right">
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="With Icons (block)">
        <OutlineButton
          type="button"
          block
          variant="primary"
          icon="add"
          style={{ marginBottom: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" block variant="primary" icon="add" iconPosition="right">
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="With Icons loading">
        <OutlineButton
          type="button"
          isLoading
          variant="primary"
          icon="add"
          size="sm"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" isLoading variant="primary" icon="add">
          Push Me
        </OutlineButton>
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);
