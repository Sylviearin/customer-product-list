import { combineReducers } from "redux";
import {all, call} from "redux-saga/effects";

import {productsReducer, ProductsState, rootProductsSaga} from "./public/products";
import {rootCommentsSaga} from "./public/products/sagas/commentsSaga";

export interface RootState {
    public: {
        products: ProductsState;
    }
}


export const publicReducer = combineReducers({
    products: productsReducer,
})



export const rootReducer = combineReducers({
    public: publicReducer,

});

export function* rootSaga() {
    yield all([
        call(rootProductsSaga),
        call(rootCommentsSaga)
    ])
}
