## Welcome to BarKeeper!

This is an app where you can create, store and update bar recipes and update inventory!
You and your team will have easy access to all recipes and product information. You can even keep track of all inventory. Enjoy!

## Steps of build...

npx create-react-app client

- create pages folder, populate with Error.js Index.js Landing.js Register.js

- normalize css,
- [normaliz docs] https://necolas.github.io/normalize.css/

npm install normalize.css

- import 'normalize.css' in index.js before index.css

## react router

- setup react router in app.js (eventually implement shared layout with protected route)
- [React Router Docs](https://reactrouter.com/docs/en/v6)

npm install history@5 react-router-dom@6

## styled components

- [Styled Components Docs](https://styled-components.com/)

npm install styled-components

## create folders

- in src create assets, components, context, utils folders

## create global context

- in context folder create actions.js appContext.js reducer.js

- in appContext.js

import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState);

return (
<AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
);
};

const useAppContext = () => {
return useContext(AppContext);
};

export { AppContext, AppProvider, initialState, useAppContext };

- in reducer.js

import { initialState } from "./appContext";

const reducer = (state, action) => {};
export default reducer;

- in index.js: wrap <AppProvider><app/></AppProvider> app in AppProvider

## stop development server in client and setup backend server

- cd ..
  npm init -y

- create server.js
- in package.json add "type": "module"

npm install nodemon

- package.json include script "start":"nodemon server"
- install express res.send and listen
- create .env
- create middleware folder, inside not-found.js error-handler.js
- create custom errors folder

- [Express-Async-Errors](https://www.npmjs.com/package/express-async-errors)
  npm install express-async-errors (use throw instead of next)
- [Http Status Codes](https://www.npmjs.com/package/http-status-codes)
  npm install http-status-codes
  npm install dotenv

- server.js
  import dotenv from 'dotenv'
  dotenv.config()

- create db folder in root
  create connectDb to connect to mongoDb atlas

  npm install mongoose

- add start function in root, try connectDb, invoke start function

## setup run client and server concurrently

npm install concurrently

- in root package.json

  "scripts": {
  "server": "nodemon server --ignore client",
  "client": "npm start --prefix client",
  "start": "concurrently --kill-others-on-fail \"npm run server\" \" npm run client\""
  },

[cra proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

- add in client
  "proxy":"http://localhost:5000"

## user model

- install and import the following
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [Validator Package](https://www.npmjs.com/package/validator)

npm install validator bcryptjs jsonwebtoken

import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

- add model folder to root and create UserScema
- create schema
- UserSchema.pre("save") generate salt, hash password

[Custom Instance Methods](https://mongoosejs.com/docs/guide.html#methods)

- add methods to schema for compare password and create jwt

export default mongoose.model("User", UserSchema);

- [Keys Generator](https://www.allkeysgenerator.com/)
- add JWT_LIFETIME JWT_SECRET to .env

## authRouter, authController

- add routes and controllers folders in root
- in server
  app.use("api/v1/auth",authRouter)
- test register and login in postman

## install morgan

- [morgan docs](https://www.npmjs.com/package/morgan)

## setup axios

- [axios docs](https://axios-http.com/docs/intro)

- in client

npm install axios

## finish setupUser in appContext

- make axios post request
- grab user, token from response.data
- [local storage docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- addUserToLocalStorage({user, token})
- must JSON.stringify(user) to add to local storage
- get user from local storage and store in const user
- state.user = user ( return data to object prop value form JSON.parse(user))
- state.token = token

## shared layout

- [nested routes](https://reactrouter.com/docs/en/v6/getting-started/overview)
- in pages create dashboard folder populate with SharedLayout.js AllProducts.js AddProduct.js Inventory.js index.js
- created nested routes/ shared layout

## protected route , logout user

- create protected route in pages
- if no user return navigate from react-router-dom
- else return children
- in app.js wrap shared layout in protected route
- app context, logout user, remove user from local storage, set state.user state.token to ""
