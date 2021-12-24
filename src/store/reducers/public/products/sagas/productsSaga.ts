import {put, select, takeLatest, takeEvery} from 'redux-saga/effects';
import {PRODUCTS_ADD, PRODUCTS_EDIT, PRODUCTS_FETCH, PRODUCTS_REMOVE} from '../constants';
import {ProductsAdd, productsData, productsError, ProductsFetch, productsFetch, ProductsRemove} from "../actions";
import { storageData} from "../../../../../utilities/constants";
import {Product} from "../../../../../models/Product";
import {CommonError} from "../../../../../models/CommonError";
import {RootState} from "../../../../store";
import { get, child, ref } from "firebase/database";
import {db} from "../../../../../firebase";

function* productsSaga(action: ProductsFetch) {

    try {
        const dbRef: any = ref(db);
        let data: Product[] = yield get(child(dbRef, `/products`)).then(data => data.val());
        yield put(productsData(data))
    } catch (error: any) {
        let e: CommonError = error.response;
        yield put(productsError(e));

    }
}

function* productsRemoveSaga(action: ProductsRemove) {
    try {
        let payload: Product[] = yield select( (state: RootState): Product[] =>
            state.public.products.list.filter(item => item.id !== action.payload)
        );
        localStorage.setItem(storageData, JSON.stringify(payload));
        yield put(productsFetch());

    } catch (error: any) {
        console.log(error)
        let e: CommonError = error.response;
        yield put(productsError(e));

    }
}

function* productsAddSaga(action: ProductsAdd) {
    try {
        let payload: Product[] = yield select( (state: RootState): Product[] =>
            state.public.products.list.concat(action.payload)
        );
        localStorage.setItem(storageData, JSON.stringify(payload));
        yield put(productsFetch());

    } catch (error: any) {
        console.log(error)
        let e: CommonError = error.response;
        yield put(productsError(e));

    }
}

function* productsEditSaga(action: ProductsAdd) {
    try {
        let payload: Product[] = yield select( (state: RootState): Product[] =>
            state.public.products.list.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
                }
            )
        );
        localStorage.setItem(storageData, JSON.stringify(payload));
        yield put(productsFetch());

    } catch (error: any) {
        console.log(error)
        let e: CommonError = error.response;
        yield put(productsError(e));

    }
}

export function* rootProductsSaga() {
    yield takeLatest(PRODUCTS_FETCH, productsSaga);
    yield takeLatest(PRODUCTS_REMOVE, productsRemoveSaga);
    yield takeEvery(PRODUCTS_ADD, productsAddSaga);
    yield takeEvery(PRODUCTS_EDIT, productsEditSaga);
}
