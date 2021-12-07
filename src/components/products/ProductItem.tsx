import React from "react";
import {Product} from "../../models/Product";

export interface Props  {
    item?: Product;
}

export const ProductItem: React.FC<Props> = () => {



    return (
        <div >
            Product preview
        </div>
    )
}
