import {put, select, takeLatest, takeEvery} from 'redux-saga/effects';
import {PRODUCTS_ADD, PRODUCTS_EDIT, PRODUCTS_FETCH, PRODUCTS_REMOVE} from '../constants';
import {ProductsAdd, productsData, productsError, ProductsFetch, productsFetch, ProductsRemove} from "../actions";
import {Product} from "../types";
import {RootState} from "../../../index";
import {mockData, storageData} from "../../../../../common/constants";
import {CommonError} from "../../../types";

function* productsSaga(action: ProductsFetch) {
    try {
        let data: string = yield localStorage.getItem('productData');
        let payload: Product[] = JSON.parse(data);

        if (payload === null) {
            localStorage.setItem(storageData, JSON.stringify(mockData));
            payload = mockData;
            yield put(productsData(payload));
        }
        yield put(productsData(payload));

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
        yield localStorage.setItem(storageData, JSON.stringify(payload));
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
        yield localStorage.setItem(storageData, JSON.stringify(payload));
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
        yield localStorage.setItem(storageData, JSON.stringify(payload));
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
