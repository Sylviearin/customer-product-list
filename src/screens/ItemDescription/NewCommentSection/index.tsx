import React, { SyntheticEvent, useEffect, useState} from "react";
import {Comment, Product} from "../../../store/reducers/public/products/types";
import {useDispatch} from "react-redux";
import {productsAddComment} from "../../../store/reducers/public/products";
import {formatDate} from "../../../common/formatDate";

// Styles import
import './styles.scss'
import {generateUniqueId} from "../../../common/components/generateUniqueId";

export interface Props  {
    item: Product
}

export interface ErrorState {
    state: boolean,
    message: string,
}

export const CommentSection: React.FC<Props> = ({item}) => {

    const dispatch = useDispatch();
    const [userComment, setUserComment] = useState('');
    const [error, setError] = useState<ErrorState>({
        state: false,
        message: '',
    });



    useEffect(() => {
        if (userComment.length > 0) {
            let errorMessage = ''
            if (!userComment.trim().match(/^[\w\s.]+$/)) {
                errorMessage += 'Incorrect comment. Comment should not have a special symbols. ';
            }
            if (userComment.length >= 255) {
                errorMessage += 'Max symbols length - 255';
            }
            if (errorMessage) {
                setError({
                    state: true,
                    message: errorMessage
                })
            } else {
                setError({
                    state: false,
                    message: '',
                });
            }
        } else {
            setError({
                state: false,
                message: '',
            });
        }


    }, [userComment])

    const handleInput = (e: SyntheticEvent<HTMLInputElement>) => {
        let target = e.target as HTMLInputElement
        setUserComment(target.value);
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        const id = generateUniqueId(); // Generate unique ID

        const today = new Date();
        let month: string = formatDate(today.getMonth() + 1),
            hours: string = formatDate(today.getHours()),
            minutes: string = formatDate(today.getMinutes());

        let formattedDate = `${hours}:${today.getMinutes()} ${minutes}.${month}.${today.getFullYear()}` // Format date to Model

        // Create payload for new Comment
        const comment: Comment = {
            productId: item.id,
            id,
            date: formattedDate,
            description: userComment
        }

        dispatch(productsAddComment({
            productId: item.id,
            comment
        }));
        setUserComment('')

    }
    return (
        <div className="d-flex flex-column new-comment-wrapper col-lg-12 pt-3 pb-3">
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-lg-12">
                            <label htmlFor="new-comment" className="form-label">Create comment</label>
                            <input
                                id="new-comment"
                                type="text"
                                placeholder="Enter your comment..."
                                className="form-control"
                                value={userComment}
                                onChange={handleInput}
                            />
                            {error.state &&
                            <small className="error-text fw-bold">{error.message}</small>

                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <button className="btn btn-dark" type="submit" disabled={error.state}>Comment</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
