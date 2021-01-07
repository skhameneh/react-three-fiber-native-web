# react-three-fiber-native-web

An example of react-three-fiber with:
 - Webpack 5
 - React Native
 - react-native-web
 - TypeScript

The Application is written in TypeScript for React Native.  
`react-native-web` polyfills most React Native platform components for the web.  
`react-three-fiber` provides a stateful architecture for three.js rendering cross-platform.  
`webpack` builds the web variant of the application.  
`html-webpack-plugin` to generate `index.html`

## Why?

To compare build chains and offer a viable build solution for niche use cases.

## Building

Requires [Node](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/getting-started/install) is recommended.

With Yarn:
 - `yarn`
 - `yarn run build`
 
 With npm:
  - `npm i`
  - `npm run build`

## Notes

 - [Automatic Node.js polyfills were removed in Webpack 5](https://webpack.js.org/blog/2020-10-10-webpack-5-release/#automatic-nodejs-polyfills-removed), some React Native code may need them aliased.
 - Webpack 5 does not support ES Chunks, so `target` is set to `es2015`, `es2020` is not supported by Webpack 5.
