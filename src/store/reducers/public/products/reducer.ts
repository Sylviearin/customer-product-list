import {CommonError} from '../../types';
import {ProductsAction} from './actions';
import {
    PRODUCTS_ADD,
    PRODUCTS_ADD_COMMENT,
    PRODUCTS_DATA,
    PRODUCTS_DELETE_ACTIVE,
    PRODUCTS_DELETE_COMMENT, PRODUCTS_EDIT,
    PRODUCTS_ERROR,
    PRODUCTS_FETCH,
    PRODUCTS_REMOVE,
    PRODUCTS_SET_ACTIVE,
    PRODUCTS_SORT_BY_COUNT,
    PRODUCTS_SORT_BY_NAME
} from './constants';
import {Product} from './types';


export interface ProductsState {
    list: Product[];
    loading: boolean;
    active: null | number;
    error?: CommonError;
}

export const initialProductsState: ProductsState = {
    list: [],
    active: null,
    loading: false,

};

export const productsReducer = (state = initialProductsState, action: ProductsAction): ProductsState => {
    switch (action.type) {
        case PRODUCTS_FETCH:
            return {
                ...state,
                loading: true,
            };
        case PRODUCTS_DATA: {
            return {
                ...state,
                loading: false,
                list: action.payload,
            };
        }

        case PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case PRODUCTS_SET_ACTIVE:
            return  {
                ...state,
                active: action.payload
            }
        case PRODUCTS_DELETE_ACTIVE:
            return  {
                ...state,
                active: null,
            }
        case PRODUCTS_REMOVE:
            return {
                ...state,
                loading: true,
            }

        case PRODUCTS_ADD:
        case PRODUCTS_EDIT:
        case PRODUCTS_SORT_BY_COUNT:
            return {
                ...state,
                list: [...state.list.sort((a, b) => {
                    if (a.count > b.count) {
                        if (action.payload) {
                            return -1;
                        }
                        return 1;
                    }

                    if (a.count < b.count) {
                        if (action.payload) {
                            return 1;
                        }
                        return -1;
                    }

                    return 0;
                })]
            }
        case PRODUCTS_SORT_BY_NAME:
            return {
                ...state,
                list: [...state.list.sort((a, b) => {
                    if (a.name > b.name) {
                        if (action.payload) {
                            return -1;
                        }
                        return 1;
                    }

                    if (a.name < b.name) {
                        if (action.payload) {
                            return 1;
                        }
                        return -1;
                    }

                    return 0;
                })]
            }

        case PRODUCTS_ADD_COMMENT:
        case PRODUCTS_DELETE_COMMENT:
        default:
            return state;
    }
};




