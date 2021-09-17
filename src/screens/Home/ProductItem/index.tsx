import React from "react";
import {Product} from "../../../store/reducers/public/products/types";
import './styles.scss';
import {useDispatch} from "react-redux";
import {productsSetActive} from "../../../store/reducers/public/products";
import {useHistory} from "react-router-dom";

export interface Props  {
    item: Product;
    setConfirmToDelete: Function;
}

export const ProductItem: React.FC<Props> = ({item, setConfirmToDelete}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (): void => {
        dispatch(productsSetActive(item.id));
        history.push('/product')
    }

    const handleDelete = (): void => {
        setConfirmToDelete({
            id: item.id,
            show: true,
        })
    }

    return (
        <div className=" position-relative" >
            <div className="d-flex align-items-center flex-column product-item">
                <p className="text-center">{item.name}</p>
                <img
                    width={item.size.width}
                    height={item.size.height}
                    src={item.imageUrl}
                    alt="item-img"
                    className="c-pointer"
                    onClick={handleClick}
                />

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">Count: </div>
                        <div className="col-lg-5">{item.count}</div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">Comments: </div>
                        <div className="col-lg-5">{item.comments.length}</div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">Weight: </div>
                        <div className="col-lg-5">{item.weight}</div>
                    </div>
                </div>
            </div>
            <span
                className="product-item-delete-mark"
                onClick={handleDelete}
            >&#10006;</span>

        </div>
    )
}
