import {Product} from "../../../store/reducers/public/products/types";
import './styles.scss'
import {CommentSection} from "../NewCommentSection";
import {CommentItem} from "../CommentItem";
import React, {useState} from "react";
import {ProductModal} from "../../../common/components/ProductModal";

export interface Props  {
    item: Product
}

export const DetailedItem: React.FC<Props> = ({item}) => {

    const comments = item.comments;
    const [show, setShow] = useState(false)

    return (
        <>
            <div className="d-flex align-items-center flex-column product-item mb-3 col-lg-6 justify-content-center position-relative">
                <p className="text-center">{item.name}</p>
                <img
                    width={item.size.width}
                    height={item.size.height}
                    src={item.imageUrl}
                    alt="item-img"
                />
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-6">Count: </div>
                        <div className="col-lg-6">{item.count}</div>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-6">Comments: </div>
                        <div className="col-lg-6">{item.comments.length}</div>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-6">Weight: </div>
                        <div className="col-lg-6">{item.weight}</div>
                    </div>
                </div>
                <span className="product-item-redact" onClick={() => setShow(true)}>Redact</span>
            </div>
            <div className="d-flex flex-column comment-wrapper col-lg-12 mb-3">
                <h2 className="text-center">Comments</h2>
                {comments.length > 0
                    ? comments.map(item => (
                        <CommentItem
                            key={item.productId.toString() + item.id.toString()}
                            item={item}
                        />
                    ))
                    : <div className="text-center">No comments here...</div>
                }
            </div>
            <CommentSection
                item={item}
            />
            <ProductModal show={show} handleClose={setShow} item={item} />
        </>
    )
}
