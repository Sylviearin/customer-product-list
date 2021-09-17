//Base imports
import React, {useState} from 'react';
import {Header} from "../../common/components/Header";
import {ProductList} from "./ProductList";
import {SortPanel} from "./SortPanel";
import {ProductModal} from "../../common/components/ProductModal";

export const Home: React.FC = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <Header />
            <SortPanel />
            <div className="container pt-2">
                <button className="btn btn-primary" onClick={() => setShow(true)}>+ New product</button>
            </div>
            <ProductList />
            <ProductModal show={show} handleClose={setShow} />
        </div>
    )
}
