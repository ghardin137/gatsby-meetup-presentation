// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Appear,
} from 'spectacle';

import IcebrgDeck from './icebrg-slide';

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
      <IcebrgDeck
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
          <Heading size={1} textColor="primary" caps>
            Me?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            Icebrg
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary">
            ICEBRG is an enterprise network security company building software that empowers our customers to detect and track adversaries in real-time. Our products helps security professionals get an unparalleled view into their networks, perform forensics on security incidents and build effective early warning systems.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps fit>
            What is Gatsby?
          </Heading>
          <a href="https://www.gatsbyjs.org"><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjAwIDEyMDAiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiM2Mzl9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjAwLDBDMjY4LjYsMCwwLDI2OC42LDAsNjAwczI2OC42LDYwMCw2MDAsNjAwczYwMC0yNjguNiw2MDAtNjAwUzkzMS40LDAsNjAwLDB6IE0yNjYuNiw5MzMuMwlDMTc2LjEsODQyLjgsMTMxLDcyNC42LDEyOS42LDYwNkw1OTQsMTA3MC40QzQ3NS40LDEwNjksMzU3LjIsMTAyMy45LDI2Ni42LDkzMy4zeiBNNzA0LjMsMTA1OS40TDE0MC42LDQ5NS43CWM0Ny41LTIxMC4xLDIzNS0zNjcuMSw0NTkuNC0zNjcuMWMxNTYuOSwwLDI5NS41LDc3LDM4MS4yLDE5NC45TDkxNS42LDM3OUM4NDUuOCwyNzkuNSw3MzAuNSwyMTQuMyw2MDAsMjE0LjMJYy0xNjcuNywwLTMxMC4zLDEwNy43LTM2My4zLDI1Ny41bDQ5MS42LDQ5MS42YzEyMy40LTQzLjcsMjE4LTE0OC4yLDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDAJQzEwNzEuNCw4MjQuNSw5MTQuNCwxMDExLjksNzA0LjMsMTA1OS40eiIvPjwvc3ZnPg==" width={100} alt="GatsbyJS" /></a>
          <Appear>
            <Text textColor="tertiary">
              A Static Site Generator that uses React and GraphQL to generate static HTML files
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps fit>
            What does that even mean?
          </Heading>
          <Appear>
            <Text textColor="tertiary">A Static Site Generator takes content and turns it into static HTML.</Text>
          </Appear>
          <Appear>
            <Text textColor="primary" textSize="50" margin="50px 0 0">Why would you want that?</Text>
          </Appear>
          <List>
            <Appear><ListItem textColor="tertiary">Fast page loads</ListItem></Appear>
            <Appear><ListItem textColor="tertiary">No need for a database</ListItem></Appear>
            <Appear><ListItem textColor="tertiary">Tiny attack surface</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps fit>
            But that sounds boring....
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 100px 0" size={6} textColor="primary" caps fit>
            That's where React comes in
          </Heading>
          <Appear>
            <Text textColor="tertiary">Gatsby uses it both to build and to run the site.</Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 100px 0" size={6} textColor="primary" caps fit>
            So what does that mean?
          </Heading>
          <Appear>
            <List>
              <ListItem textColor="tertiary">React in the Client</ListItem>
              <ListItem textColor="tertiary">Full Lifecycle available</ListItem>
              <ListItem textColor="tertiary">Asynchronous actions possible</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 100px 0" size={1} textColor="primary" caps>
            So what?
          </Heading>
          <Appear>
            <List>
              <ListItem textColor="tertiary">Partially static sites</ListItem>
              <ListItem textColor="tertiary">Backend Agnostic</ListItem>
              <ListItem textColor="tertiary">Can be served from anywhere</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 50px 0" size={6} textColor="primary" caps fit>
            What's Contentful?
          </Heading>
          <a href="https://www.contentful.com">
            <img src="https://www.contentful.com/developers/_assets/logo.74f883e83b.svg" width={100} alt="Contentful" />
          </a>
          <Appear>
            <Text textColor="tertiary" margin="50px 0 0 0">Headless CMS as a Service</Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 50px 0" size={6} textColor="primary" caps fit>
            Why Contentful?
          </Heading>
          <Appear>
            <List>
              <ListItem textColor="tertiary">Easy to use Custom Content Types</ListItem>
              <ListItem textColor="tertiary">Markdown Compliant with easy to use WYSIWYG</ListItem>
              <ListItem textColor="tertiary">Handles Assets natively</ListItem>
              <ListItem textColor="tertiary">Multi-Language Support Baked In</ListItem>
              <ListItem textColor="tertiary">Gatsby has a source plugin</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 100px 0" size={6} textColor="primary" caps fit>
            Some Live Coding
          </Heading>
          <Text textSize={20} textColor="tertiary">Wish me luck.</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 100px 0" size={6} textColor="primary" caps fit>
            Deploying Your Gatsby/Contentful Site
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 100px 0" size={6} textColor="primary" caps fit>
            Netlify
          </Heading>
          <Text textColor="tertiary">
            An all-in-one workflow that combines global deployment, continuous integration, HTTPS, and more.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 50px 0" size={6} textColor="primary" caps fit>
            Why Netlify?
          </Heading>
          <List>
            <ListItem textColor="tertiary">Set up is EASY</ListItem>
            <ListItem textColor="tertiary">Almost completely free</ListItem>
            <ListItem textColor="tertiary">Handles HTTPS for you</ListItem>
            <ListItem textColor="tertiary">Enables Preview Builds</ListItem>
            <ListItem textColor="tertiary">DNS Management</ListItem>
            <ListItem textColor="tertiary">Did I mention free?</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 100px 0" size={6} textColor="primary" caps fit>
            Some Live Setup
          </Heading>
          <Text textSize={20} textColor="tertiary">It's so easy you don't really need luck.</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 100px 0" size={6} textColor="primary" caps fit>
            Questions?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="0 0 100px 0" size={6} textColor="primary" caps fit>
            Thank you!
          </Heading>

          <List>
            <ListItem><a href="https://github.com/ghardin137/reactmeetup">https://github.com/ghardin137/reactmeetup</a></ListItem>
            <ListItem><a href="https://github.com/ghardin137/gatsby-meetup-presentation">https://github.com/ghardin137/gatsby-meetup-presentation</a></ListItem>
          </List>
        </Slide>
      </IcebrgDeck>
    );
  }
}
