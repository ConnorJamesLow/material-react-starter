import { combineReducers } from "redux";
import user from "./user";
import drawer from "./drawer";
import { useSelector } from 'react-redux';
import theme from "./theme";

const root = combineReducers({ user, drawer, theme });

// RootState will give us the types of the content stored in reducers
export type RootState = ReturnType<typeof root>;

// useRedux wraps useSelector and forces the RootState as the state input type... this is a function that takes a function and puts it into another function, which it returns.
/**
 * Bind state to data in the store.
 * 
 * @param callback A useSelector function.
 */
export const useRedux = <T>(callback: (state: RootState) => T): T => useSelector((state: RootState) => callback(state));

export default root;