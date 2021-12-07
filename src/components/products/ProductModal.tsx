import React from "react";
import {Product} from "../../models/Product";

export interface Props  {
    item?: Product
}

export const ProductModal: React.FC<Props> = () => {


    return (
        <div>
            this will be modal
        </div>
    )
}
