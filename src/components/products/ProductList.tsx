import React, {useCallback, useEffect} from "react";
import {SortPanel} from "../layouts/SortPanel";
import {ProductModal} from "./ProductModal";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {productsFetch} from "../../store/reducers/public/products";
import {Button, CircularProgress, Grid} from "@mui/material";
import {useAppSelector} from "../../hooks/useAppSelector";
import {API_ERROR, API_INITIAL, API_LOADING, API_SUCCESS} from "../../API/state";


export const ProductList: React.FC = () => {

    const dispatch = useAppDispatch();
    const productsList = useAppSelector(state =>
        state.public.products.list
    );
    const productsState = useAppSelector(state =>
        state.public.products.loading
    );

    const renderList = useCallback(() => {
        switch (productsState) {
            case API_INITIAL:
                return <span>Initial</span>
            case API_LOADING:
                return <CircularProgress />
            case API_SUCCESS:
                return productsList.map(item => (
                    <Grid item xl={3} lg={3} md={4} sm={6} xs={12} key={item.id}>
                        <div className="product-item">
                            <h4>{item.name}</h4>
                            <img src={item.imageUrl} alt={item.name}  height={item.size.height} width={item.size.width}/>
                        </div>
                    </Grid>
                ))
            case API_ERROR:
                return <span style={{color: "red"}} >Error!</span>
            default:
                break;
        }
    }, [productsList, productsState])
    
    useEffect(() => {
        dispatch(productsFetch());
    }, [dispatch])

    console.log('component re-render')

    return (
        <div>
            <SortPanel />
            <div>
                <Button variant="main">
                    + New product
                </Button>
            </div>
            <Grid container>
                {renderList()}
            </Grid>
            <ProductModal />
        </div>
    );
}
