// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import styled from 'react-emotion';

import IcebrgSlide from './icebrg-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#000000',
    tertiary: '#0055FF',
    quartenary: '#191818',
  },
  {
    primary: 'Radnika-Condensed',
    secondary: 'Roboto',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <IcebrgSlide
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="secondary">
          <Text size={1} textColor="tertiary" style={{ fontSize: "4rem", transform: "rotate(-10deg) translateY(65%)", transformOrigin: 0, textTransform: "uppercase", textDecoration: "underline", textAlign: "left", zIndex: 500 }}>Somewhat</Text>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Static Sites
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
            with Gatsby, Contentful, and Netlify
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </IcebrgSlide>
    );
  }
}
