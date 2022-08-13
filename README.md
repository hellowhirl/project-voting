# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). and TypeScript

## Available Scripts

### `npm start`

### `npm test`

### `npm run build`

## Design decisions

### Architecture

I used React to demonstrate my familiarity with building a single page application that renders response data, handles user interaction, and simulates async API requests.

I made this a TypeScript project so I could have static typing in my project. It helps me create more reliable applications with the ability to catch bugs before runtime. Also, TypeScript is now becoming an industry standard and it is preferred by most companies these days.

### UI

One of the design assets that was provided did not match the design - this was the upvote arrow icon. Even though the design showed a blue color upvote icon I was only provided a black one. I was able to use a css property called `filter` and reproudce a similar blue color to the design.

The requirements didn't mention anything about how the product listings should look when they move up the list after they have been upvoted. I decided to add an animation to the product listings that move down the list to create a smoother movement transition between products.

Besides these points, I was able to match the design almost perfectly.

### Testing

I included standard tests like checking if text and elements render correctly on the page. I also added a test for checking upvote functionality and sort ordering in a single test case. This test simulates a product listing being upvoted and then compares it to another product listing to see that the ordering is still being rendered from highest to lowest.
