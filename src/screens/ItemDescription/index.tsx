import React, {useEffect, useState} from "react";
import {Header} from "../../common/components/Header";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import {Product} from "../../store/reducers/public/products/types";
import {Redirect} from "react-router-dom";
import {DetailedItem} from "./DetailedItem";
import {productsDeleteActive} from "../../store/reducers/public/products";


export const ItemDescription: React.FC = () => {

    const dispatch = useDispatch();
    const active = useSelector((state: RootState): number | null =>
        state.public.products.active
    );

    const data = useSelector( (state: RootState): Product[] =>
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
            <Header />
            <div className="container">
                <div className="row justify-content-center">
                    {data && active && activeItem
                        ? <DetailedItem item={activeItem} />
                        : <Redirect to="/" />
                    }
                </div>
            </div>

        </div>
    )
}