//Base imports
import React from 'react';
import {Header} from "../../components/Header";
import {ProductList} from "../../components/products/ProductList";
import {SortPanel} from "../../components/SortPanel";
import {ProductModal} from "../../components/products/ProductModal";

export const HomeView: React.FC = () => {


    return (
        <div>
            <Header />
            <SortPanel />
            <div className="container pt-2">
                <button className="btn btn-primary">+ New product</button>
            </div>
            <ProductList />
            <ProductModal />
        </div>
    )
}
