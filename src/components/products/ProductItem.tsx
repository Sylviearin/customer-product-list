import React from "react";
import {Product} from "../../models/Product";
import { Grid } from "@mui/material";
import * as Icon from 'react-feather';

export interface Props  {
    item: Product;
}

export const ProductItem: React.FC<Props> = ({item}) => {


    return (
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
            <div className="product-item">

                <div className="product-item__header cursor-pointer">
                    <h4>{item.name}</h4>
                </div>

                <div className="product-item__preview-image cursor-pointer">
                    <figure>
                        <img src={item.imageUrl} alt={item.name}  height={item.size.height} width={item.size.width}/>
                    </figure>
                </div>

                <div className="product-item__description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur beatae eveniet
                        maiores molestias natus neque nesciunt nobis nostrum provident quae, quas. Doloribus eius enim,
                        error fuga id quia tenetur!
                    </p>
                </div>

                <div className="product-item__footer">
                    <ul>
                        <li className="cursor-pointer">
                            <span><Icon.MessageSquare /></span>
                            <span>{item.comments.length}</span>
                        </li>
                        <li>
                            <span><Icon.Package /></span>
                            <span>{item.count}</span>
                        </li>
                        <li>
                            <span><Icon.Tag /></span>
                            <span>{item.weight}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Grid>
    )
}
