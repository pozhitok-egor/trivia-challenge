# Trivia Challenge
Test web application
## Table of Contents
- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Running the project](#running-the-project)
- [Problems](#problems)
- [Built with](#built-with)
## Getting Started
1. Make sure you have `Node.js` and `npm` installed. [Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Clone this repo into your local machine
  `https://github.com/pozhitok-egor/trivia-challenge.git`
#### Running the project
- Run in terminal `npm i` to install all dependencies into `node_modules`
- Run in terminal `npm start` to start server with the application
## Problems
During the development process, there were some problems with the task, which could be solved only after consulting.
#### Design problems
- **It is not clear whether it should be closed on the screen with a question.**
There is no cross icon on the screen with the question in the desktop version. But there is on the mobile screen.
- **It is not clear how to make blobs.**
Blobs on all screens are different, but on the desktop version they are the same on the settings and statistics screens.
- **It is not clear how to do list on results screen.**
There are 10 questions in the desktop version, 8 of which are answered correctly. At the same time, there are only 6 colored stars. There are 6 correct answers on the mobile version. But all the same, there are 7 questions everywhere in the list.
- **Different width of elements on screens.**
- **Question align different on mobile and desktop.**
- **The task specifies that all graphic elements must be in svg format. However, the Trivia logo is not presented in a vector format.**
- **The design indicates the number of 2,889,868.**
This is a little confusing, because the number of possible API questions is 50.

#### Task problems
- **It is unclear what `"Input box should not be hidden by keyboard"` means.**
- **The number of allowed anount of questions is not specified.**
- **Difficulty is only `easy` and `hard`. The API has `medium`**
- **It is not specified what the levels are.**
- **It is not specified whether routing should be used**
## Built with
#### API

- [Trivia API](https://opentdb.com/)
#### Libraries:
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/), [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [styled-components](https://styled-components.com/)
- [axios](https://axios-http.com/)
