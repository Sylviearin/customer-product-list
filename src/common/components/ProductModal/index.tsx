import React, {SyntheticEvent, useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import "./styles.scss"
import {useDispatch} from "react-redux";
import {Product} from "../../../store/reducers/public/products/types";
import {productsAdd, productsEdit} from "../../../store/reducers/public/products";
import {generateUniqueId} from "../generateUniqueId";

export interface Props  {
    show: boolean;
    handleClose: Function;
    item?: Product
}

export const ProductModal: React.FC<Props> = ({show, handleClose, item}) => {

    const dispatch = useDispatch();

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState<string>('');
    const [weight, setWeight] = useState('');

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        if (item) {
            let payload: Product = {
                id: item.id,
                imageUrl: image,
                name,
                count: parseInt(amount, 10),
                weight,
                size: {
                    width: 200,
                    height: 200,
                },
                comments: item.comments,

            };
            dispatch(productsEdit(payload));
            setImage('')
            setName('')
            setAmount('')
            setWeight('')
            close();
        } else {
            let payload: Product = {
                id: generateUniqueId(),
                imageUrl: image,
                name,
                count: parseInt(amount, 10),
                weight,
                size: {
                    width: 200,
                    height: 200,
                },
                comments: [],

            };
            dispatch(productsAdd(payload));
            setImage('')
            setName('')
            setAmount('')
            setWeight('')
            close();
        }

    }

    useEffect(() => {
        if (item) {
            setImage(item.imageUrl)
            setName(item.name)
            setAmount(item.count.toString())
            setWeight(item.weight)
        }
    }, [item])

    const close = () => {
        handleClose(false)
    }

    const handleImg = (e: SyntheticEvent) => {
        setImage((e.target as HTMLInputElement).value)
    }

    const handleName = (e: SyntheticEvent) => {
        setName((e.target as HTMLInputElement).value)
    }

    const handleAmount = (e: SyntheticEvent) => {
        setAmount((e.target as HTMLInputElement).value)
    }

    const handleWeight = (e: SyntheticEvent) => {
        setWeight((e.target as HTMLInputElement).value)
    }
    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>{item ? 'Redact' : 'Create'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form id="product-modal" onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-lg-12">
                                <label htmlFor="img-url" className="form-label">Product image</label>
                                <input
                                    required
                                    id="img-url"
                                    type="url"
                                    value={image}
                                    onChange={handleImg}
                                    placeholder="Enter image url..."
                                    className="form-control"
                                    pattern="^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|gif|png)$"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-lg-12">
                                <label htmlFor="name" className="form-label">Product name</label>
                                <input
                                    required={true}
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={handleName}
                                    placeholder="Enter product name..."
                                    className="form-control"
                                    pattern="^[A-z\s]+$"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-lg-12">
                                <label htmlFor="count" className="form-label">Product amount</label>
                                <input
                                    required={true}
                                    id="count"
                                    type="number"
                                    value={amount}
                                    onChange={handleAmount}
                                    placeholder="Enter product amount..."
                                    className="form-control"
                                    min="0"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-lg-12">
                                <label htmlFor="weight" className="form-label">Product weight</label>
                                <input
                                    required={true}
                                    id="weight"
                                    type="text"
                                    value={weight}
                                    onChange={handleWeight}
                                    placeholder="Enter product weight..."
                                    className="form-control"
                                    pattern="^[\d]${0,9}+\.(?:g|kg)$"
                                />
                            </div>
                        </div>

                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <div className="container btn-product-modal">
                    <div className="row">
                        <div className="col-lg-6">
                            <Button size="lg" variant="danger" onClick={close}>
                                No
                            </Button>
                        </div>
                        <div className="col-lg-6">
                            <Button
                                type="submit"
                                form="product-modal"
                                size="lg"
                                variant="success"
                            >Yes
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    )
}
