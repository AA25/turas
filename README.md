## Turas
- This repo was created as a proof of concept for the Turas app (Ported over from AWS CodeCommit), the goal of the POC was to help get an understanding of how React Native works, Geolocation and integration with Google Maps.

- Turas will be an application that allows provides users with local pubs in the area that they have yet to visit in the area. Users will be able to check off the pubs they have been to and view their progress. There will be achievements tied to visiting these pubs providing a fun and interactive aspect to the app.

- Here's some pics of the POC

## Commands
  - `npm run fix` - fix and format code based on eslint rules (TODO - Prettier integration)
  - `⌘R/ios || tap R twice/android` - Force hot reload

## Cloning and running project for the first time (Only for Android for now)
  - React Native
    - Get started by following `https://facebook.github.io/react-native/docs/getting-started.html` (React Native Quickstart for both ios and android)
  - Remove /node_modules folder and do npm i || yarn install
  - To link for native dependencies (the modules we use that need this linking)
    - `react-native link`
  - Run the project and hope it works...

## Running Project
- Android:
  - Run your android emulator via android studio
  - `react-native run-android` - runs android (connect mobile via usb to run on physical device)
  - `react-native log-android` - runs logger

- iOS:
  - Make sure you have xcode installed
  - `react-native run-ios` - runs ios
  - `react-native log-ios` - runs logger

## Running Tests

## Deploying

### VSCode IDE setup
- Download ESLint plugin

