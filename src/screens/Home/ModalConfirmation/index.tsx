import React from "react";
import {Button, Modal} from "react-bootstrap";
import "./styles.scss"
import {useDispatch} from "react-redux";
import {productsRemove} from "../../../store/reducers/public/products";

export interface Props  {
    show: boolean;
    id: number | null;
    handleClose: Function;
}

export const ModalConfirmation: React.FC<Props> = ({show, handleClose, id}) => {

    const dispatch = useDispatch();

    const handleDelete = () => {

        if (typeof id === "number") {
            dispatch(productsRemove(id))
        }
        close()
    }

    const close = () => {
        handleClose()
    }

    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure to delete item?</Modal.Body>
            <Modal.Footer>
                <div className="container btn-delete-group">
                    <div className="row">
                        <div className="col-lg-6">
                            <Button size="lg" variant="danger" onClick={close}>
                                No
                            </Button>
                        </div>
                        <div className="col-lg-6">
                            <Button size="lg" variant="success" onClick={handleDelete}>
                                Yes
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    )
}
