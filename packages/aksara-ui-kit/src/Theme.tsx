import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { breakpoints, headingSizes, textSizes, colors, space } from './utils/variables';

export const themeProps = {
  colors,
  space,
  breakpoints: [breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl],
  fontSizes: {
    heading: headingSizes,
    text: textSizes
  }
};

/**
 * Aksara theme provider
 */
export const Theme = (props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={themeProps}>
      <>{props.children}</>
    </ThemeProvider>
  );
};

export type FontSizes = typeof themeProps.fontSizes;
export type HeadingSizes = typeof headingSizes;
export type TextSizes = typeof textSizes;
export type Color = keyof typeof themeProps['colors'];
export type Space = keyof typeof themeProps['space'];
