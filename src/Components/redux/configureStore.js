import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { handleStockReducer } from "./Stock/stock";

const rootReducer = combineReducers({
    stocks: handleStockReducer,
});

const store = configureStore(
    {
        reducer: rootReducer,
    },
    applyMiddleware(thunk)
);

export default store;