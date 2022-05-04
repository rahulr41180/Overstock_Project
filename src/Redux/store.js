
import { legacy_createStore as createStore, combineReducers } from "redux";

import { ProductDetailsReducer } from "../components/ProductDetailsPage/reducer";

const rootReducer = combineReducers({
    ProductDetails : ProductDetailsReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



store.subscribe(() => {
    console.log("Subscribe : ", store.getState());
})