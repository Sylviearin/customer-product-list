import {CommonError} from "./CommonError";

export interface CommonState {
    error?: CommonError;
    loading?: boolean;
}
