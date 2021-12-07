import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {DetailedProductItem} from "../components/products/DetailedProductItem";
import {productsDeleteActive} from "../store/reducers/public/products";
import {Product} from "../models/Product";
import {useAppSelector} from "../hooks/useAppSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";


export const ProductItemView: React.FC = () => {

    const dispatch = useAppDispatch();
    const active = useAppSelector((state): number | null =>
        state.public.products.active
    );

    const data = useAppSelector( (state): Product[] =>
        state.public.products.list
    )

    const [activeItem, setActiveItem] = useState(data.find(item => item.id === active))

    useEffect(() => {
        if (active !== null) {
            setActiveItem(data.find(item => item.id === active))
        }
    }, [active, data]);

    useEffect(() => {
        return () => {
            dispatch(productsDeleteActive())
        }
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    {data && active && activeItem
                        ? <DetailedProductItem item={activeItem} />
                        : <Navigate to="/" />
                    }
                </div>
            </div>

        </div>
    )
}
