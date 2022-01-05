import React, { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Alert,
    Row,
    Col,
} from "reactstrap";
import { connect } from "react-redux";
import { setModalReturnPending } from "../../redux";
import Button from "../Button";
import ButtonComponent from "../Button";

const ModalReturnPending = (props) => {
    const {
        buttonLabel,
        className,
        modalReturnPending,
        setModalReturnPending,
    } = props;
    const [alert, setAlert] = useState(false);

    return (
        <div>
            <Modal isOpen={modalReturnPending.visible} className={className}>
                <ModalBody>
                    <Row className="justify-center-self">
                        <Col
                            md="12"
                            className="text-center justify-content-center"
                        >
                            <h2>Cancel</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center modal-return-pending">
                            <p>Are you sure to cancel?</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <ButtonComponent
                                className="w-100"
                                label="Yes"
                                color="dark"
                            />
                        </Col>
                        <Col md="6">
                            <ButtonComponent
                                className="w-100"
                                label="No"
                                color="dark"
                                handleSubmit={() =>
                                    setModalReturnPending({ visible: false })
                                }
                            />
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </div>
    );
};

const mapStateProps = (state) => {
    return {
        modalReturnPending: state.generalReducer.modalReturnPending,
    };
};

export default connect(mapStateProps, { setModalReturnPending })(
    ModalReturnPending
);
