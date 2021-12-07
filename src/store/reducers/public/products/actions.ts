
import {
    PRODUCTS_ADD,
    PRODUCTS_ADD_COMMENT,
    PRODUCTS_DATA,
    PRODUCTS_DELETE_ACTIVE, PRODUCTS_DELETE_COMMENT, PRODUCTS_EDIT,
    PRODUCTS_ERROR,
    PRODUCTS_FETCH,
    PRODUCTS_REMOVE,
    PRODUCTS_SET_ACTIVE,
    PRODUCTS_SORT,
} from './constants';
import {Product} from "../../../../models/Product";
import {IComment} from "../../../../models/IComment";
import {CommonError} from "../../../../models/CommonError";
import {ProductSortKeys} from "../../../../models/ProductSortKeys";


export interface ProductsFetch {
    type: typeof PRODUCTS_FETCH;
}

export interface ProductsData {
    type: typeof PRODUCTS_DATA;
    payload: Product[];
}

export interface ProductsError {
    type: typeof PRODUCTS_ERROR;
    error: CommonError;
}

export interface ProductsSetActive {
    type: typeof PRODUCTS_SET_ACTIVE;
    payload: number;
}

export interface ProductsDeleteActive {
    type: typeof PRODUCTS_DELETE_ACTIVE;
}

export interface ProductsRemove {
    type: typeof PRODUCTS_REMOVE;
    payload: number;
}

export interface ProductsSort {
    type: typeof PRODUCTS_SORT;
    payload: {
        by: ProductSortKeys;
        toggle: boolean;
    };
}

export interface ProductsAddComment {
    type: typeof PRODUCTS_ADD_COMMENT;
    payload: {
      productId: number,
      comment: IComment,
    };
}

export interface ProductsDeleteComment {
    type: typeof PRODUCTS_DELETE_COMMENT;
    payload: {
        productId: number,
        commentId: number,
    };
}

export interface ProductsAdd {
    type: typeof PRODUCTS_ADD;
    payload: Product;
}

export interface ProductsEdit {
    type: typeof PRODUCTS_EDIT;
    payload: Product
}

export type ProductsAction = ProductsFetch
    | ProductsData
    | ProductsError
    | ProductsSetActive
    | ProductsDeleteActive
    | ProductsRemove
    | ProductsAddComment
    | ProductsDeleteComment
    | ProductsAdd
    | ProductsEdit
    | ProductsSort


export const productsFetch = (): ProductsFetch => ({
    type: PRODUCTS_FETCH,
});

export const productsData = (payload: ProductsData['payload']): ProductsData => ({
    type: PRODUCTS_DATA,
    payload,
});

export const productsError = (error: CommonError): ProductsError => ({
    type: PRODUCTS_ERROR,
    error,
});

export const productsSetActive = (payload: number): ProductsSetActive => ({
    type: PRODUCTS_SET_ACTIVE,
    payload,
});

export const productsDeleteActive = (): ProductsDeleteActive => ({
    type: PRODUCTS_DELETE_ACTIVE,
});

export const productsRemove = (payload: number): ProductsRemove => ({
    type: PRODUCTS_REMOVE,
    payload
});

export const productsSortByCount = (payload: ProductsSort['payload']): ProductsSort => ({
    type: PRODUCTS_SORT,
    payload
});


export const productsAddComment = (payload: ProductsAddComment['payload']): ProductsAddComment => ({
    type: PRODUCTS_ADD_COMMENT,
    payload
});

export const productsDeleteComment = (payload: ProductsDeleteComment['payload']): ProductsDeleteComment => ({
    type: PRODUCTS_DELETE_COMMENT,
    payload
});

export const productsAdd = (payload: Product): ProductsAdd => ({
    type: PRODUCTS_ADD,
    payload
});

export const productsEdit = (payload: Product): ProductsEdit => ({
    type: PRODUCTS_EDIT,
    payload
});
