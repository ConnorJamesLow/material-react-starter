import { createStore, compose } from "redux";
import reducers from './reducers';
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

// This doesn't do anything to the app, but provides a hook for Redux dev-tools to connect and read from our app's store.
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());
export type AppDispatch = typeof store.dispatch;
export const createAction = (action: ActionCreatorWithPayload<any, any>, payload?: any) => ({ type: action.type, payload });

// This is a function that takes a function and uses it as a callback in the result of this function, which is a function 
// that takes two inputs and passes them to another function which returns an object that is passed to callback function of this function.
export const createDispatcher = (dispatcher: Function) => (action: ActionCreatorWithPayload<any, any>, payload?: any) => dispatcher(createAction(action, payload));
export default store;

// Not sure if this actually does anything.
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(reducers);
    });
  }
}
