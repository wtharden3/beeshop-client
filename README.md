# The Beeshop client project 
## Whitney Harden 
[Whitney's Github](https://github.com/wtharden3)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This project was created utilizing, react (stateful components) and TypeScript. 

## Using Beeshop locally

1. You must also download the server which can be found at Github: [Beeshop-Server](https://github.com/wtharden3/beeshop-server)

2. You must create a postgres database. I used [PgAdmin](https://www.pgadmin.org/download/). The steps to complete the database will be on the README.md of the [beeshop server](https://github.com/wtharden3/beeshop-server).

3. Once you have cloned the project locally run `npm install`.

4. In order to run it locally. Start the beeshop-server. The directions to do that are listed on the he README.md of the [beeshop server](https://github.com/wtharden3/beeshop-server).

5. then `npm start` to run the application.

## User Roles

1. Shopper - the shopper is the general user. The are able to view the store and most of the site aside from "Dashboard". They can also add to the cart. They must log in with either a customer account or admin account to place an order 

2. Customer - the customer can do everything the shopper can do pluse they add to place an order, view their orders, edit an order, delete orders. 

3. Admin - The admin can do everything the customer can do plus add new products to the store, view all orders, edit all orders, delete any order, and edit or delete any product.

## Customer Signup
In order to sign up as a customer, you must comeplete the signup form and select "I want to shop".


## Admin Signup
In order to sign up as a customer, you must comeplete the signup form and select "I want to be a store owner".


# General Info about this React project: 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## For clones

if you clone the project, make sure to run `npm install` for node modules

## Add-ons

In order to accomodate customizing themes in Ant Design, yarn, less, and craco have been used.


[Ant Design: Customize Theme Using TypeScript and CRA (create-react-app)](https://ant.design/docs/react/use-in-typescript)

[yarn](https://yarnpkg.com/)

[craco](https://github.com/gsoft-inc/craco)

[less](http://lesscss.org/)


