//Base imports
import React from 'react';
import {ProductList} from "../components/products/ProductList";

export const HomeView: React.FC = () => {


    return (
        <section id="home-view-ref">
            <ProductList />
        </section>
    )
}

export default HomeView;
