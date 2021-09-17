import React, { useEffect, useState} from "react";
import {ProductItem} from "../ProductItem";
import { Spinner} from "react-bootstrap";
import {Product} from "../../../store/reducers/public/products/types";

// Styles import
import './styles.scss';
import {useDispatch, useSelector} from "react-redux";
import {productsFetch} from "../../../store/reducers/public/products";
import {RootState} from "../../../store/reducers";
import {ModalConfirmation} from "../ModalConfirmation";
import {mockData, storageData} from "../../../common/constants";

export const ProductList: React.FC = () => {

    const data = useSelector( (state: RootState): Product[] =>
        state.public.products.list
    )

    const loading = useSelector( (state: RootState): boolean =>
        state.public.products.loading
    )
    const dispatch = useDispatch();
    const [confirmToDelete, setConfirmToDelete] = useState({
        id: null,
        show: false,
    })



    const handleClick = () => {
        localStorage.setItem(storageData, JSON.stringify(mockData));
        dispatch(productsFetch())
    }

    const handleClose = () => {
        setConfirmToDelete({
            ...confirmToDelete,
            show: false,
        });
    }

    return (
        <div className="container">
            <div className="row">
                {loading
                    ? <div className="mt-5 d-flex justify-content-center"><Spinner animation='border'/></div>
                    : data.length > 0
                        ? data.map(item => (
                            <div
                                key={item.id}
                                className="col-lg-4 product-item-wrapper"
                            >
                                <ProductItem
                                    item={item}
                                    setConfirmToDelete={setConfirmToDelete}
                                />
                            </div>
                        ))
                        :
                        <div className="text-center">
                            Dont have items... Create new or
                            <span
                                className="inline-load-mocked"
                                onClick={handleClick}
                            > load mocked</span>
                        </div>
                }
            </div>
            <ModalConfirmation
                show={confirmToDelete.show}
                id={confirmToDelete.id}
                handleClose={handleClose}
            />
        </div>
    );
}
