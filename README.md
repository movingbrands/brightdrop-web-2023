# BrightDrop Web 2023

![BrightDrop and Moving Brands](/documentation/project-banner.png)

This repository contains a collection of prototypes to support our collaboration to refresh [gobrightdrop.com](https://gobrightdrop.com) in mid-2023. The examples focus on use of motion throughout the site.

## About
This project is set up as a [next.js](https://nextjs.org/) app. The codebase uses the new [app router](https://nextjs.org/docs/app).

### Main dependencies
The emphasis has been to restrict external dependencies to a minimum. This is to allow the repository to be used a guide for implementation using other libraries or conventions that may be in use on the production BrightDrop site.

* Written in React and Typescript
* Uses [`vanilla-extract`](https://vanilla-extract.style/) for styling
* Uses [`framer-motion`](https://www.framer.com/motion/) for more complex animation
* Uses [`zustand`](https://github.com/pmndrs/zustand) for simple global state management
* Uses some [`radix-ui`](radix-ui.com) primitives for the structure of components (for example, the Navigation bar)

## Getting started
* `pnpm install`
* `pnpm dev` to run examples
