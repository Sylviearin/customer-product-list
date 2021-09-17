import {put, select, takeLatest} from 'redux-saga/effects';
import {ProductsAddComment, ProductsDeleteComment, productsError, productsFetch} from '../actions';
import {Product} from "../types";
import {CommonError} from "../../../types";
import {RootState} from "../../../index";
import {storageData} from "../../../../../common/constants";
import {PRODUCTS_ADD_COMMENT, PRODUCTS_DELETE_COMMENT} from "../constants";



function* commentsAddSaga(action: ProductsAddComment) {
    try {
        let payload: Product[] = yield select( (state: RootState): Product[] =>
            state.public.products.list.map((item: Product): Product => {
                const {productId, comment} = action.payload;
                if (item.id === productId) {
                    item.comments.push(comment)
                    return item
                } else {
                    return item
                }

            })
        );
        yield localStorage.setItem(storageData, JSON.stringify(payload));
        yield put(productsFetch());

    } catch (error: any) {
        console.log(error)
        let e: CommonError = error.response;
        yield put(productsError(e));

    }
}

function* commentsRemoveSaga(action: ProductsDeleteComment) {
    try {
        let payload: Product[] = yield select( (state: RootState): Product[] =>
            state.public.products.list.map(item => {
                const {productId, commentId} = action.payload;
                if (item.id === productId) {
                    item.comments = item.comments.filter(item => item.id !== commentId)
                }
                return item
            })
        );
        yield localStorage.setItem(storageData, JSON.stringify(payload));
        yield put(productsFetch());

    } catch (error: any) {
        console.log(error)
        let e: CommonError = error.response;
        yield put(productsError(e));

    }
}

export function* rootCommentsSaga() {
    yield takeLatest(PRODUCTS_ADD_COMMENT, commentsAddSaga);
    yield takeLatest(PRODUCTS_DELETE_COMMENT, commentsRemoveSaga);
}
