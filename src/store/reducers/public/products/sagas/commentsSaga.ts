import {put, select, takeLatest} from 'redux-saga/effects';
import {ProductsAddComment, ProductsDeleteComment, productsError, productsFetch} from '../actions';
import {storageData} from "../../../../../utilities/constants";
import {PRODUCTS_ADD_COMMENT, PRODUCTS_DELETE_COMMENT} from "../constants";
import {Product} from "../../../../../models/Product";
import {RootState} from "../../../../store";
import {CommonError} from "../../../../../models/CommonError";


function* commentsAddSaga(action: ProductsAddComment) {
    try {
        const {productId, comment} = action.payload;
        let payload: Product[] = yield select( (state: RootState): Product[] => state.public.products.list);
        payload = payload.map((item: Product): Product => {
            if (item.id === productId) {
                item.comments.push(comment)
                return item
            } else {
                return item
            }
        })
        yield localStorage.setItem(storageData, JSON.stringify(payload));
        yield put(productsFetch());

    } catch (error: any) {
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
