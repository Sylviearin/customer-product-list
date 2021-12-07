//Base imports
import React from 'react';
import {ProductList} from "../components/products/ProductList";
import {SortPanel} from "../components/layouts/SortPanel";
import {ProductModal} from "../components/products/ProductModal";

export const HomeView: React.FC = () => {


    return (
        <>
            <SortPanel />
            <ProductList />
            <ProductModal />
        </>
    )
}
