# Chucknorris jokes mini app
![](https://res.cloudinary.com/tdi-exchange/image/upload/v1549975657/assets/BAF09C46-688E-4BA1-87E6-FC0D0FAFFF20_.png.jpg)

## Built with

This app is retrieving data from [https://api.chucknorris.io](https://api.chucknorris.io/) API.

i used ReactJS on the front-end and [styled-components](https://www.styled-components.com/) for styling

## Installation

This app is bootstrapped with Create React App

you can clone this repository or play with it on [CodeSandBox](https://codesandbox.io/s/github/ahrbil/chucknorris-jokes).

`yarn install` or `npm install` to install all dependencies

after that `yarn start` to start the development server.

## Building for production

Create React App provides a build script by running `yarn build`

## App Structure

![](https://res.cloudinary.com/tdi-exchange/image/upload/v1549975657/assets/F87582C4-2331-423C-9CA5-C0F9C92336EE_.png.jpg)

So the way this project is structured is

in `src` directory I have a folder `assets` where I put all assets like images, fonts, and svgs.

in `components` directory where I put all the components (its logic and styling) I need for the app so easily i can import a card component and I have it anywhere i want.

in this folder also there is a style folder that contains all global style-components.

then a `lib` where you can find all helper functions.

and for pages, I have `pages` folder that contains all pages of the app.

the app entry point is `App.js`.
