import React from "react";
import {Comment} from "../../../store/reducers/public/products/types";
import './styles.scss'
import {useDispatch} from "react-redux";
import {productsDeleteComment} from "../../../store/reducers/public/products";

export interface Props  {
    item: Comment
}

export const CommentItem: React.FC<Props> = ({item}) => {


    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(productsDeleteComment({
            productId: item.productId,
            commentId: item.id
        }))
    }

    return (

        <div
            className="d-flex flex-column comment-item position-relative"
        >
            <p className="comment-item-date">Date: {item.date}</p>
            <p className="comment-item-text">{item.description}</p>
            <span
                className="product-item-delete-mark"
                onClick={handleDelete}
            >&#10006;</span>
        </div>

    )
}
