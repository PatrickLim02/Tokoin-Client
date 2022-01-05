import React, { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Alert,
    Row,
    Col,
    Form,
    FormGroup,
    Label
} from "reactstrap";
import { connect } from "react-redux";
import { setModalPending } from "../../redux";
import TextInput from "../../components/TextInput";
import ButtonComponent from "../Button";

const ModalPending = (props) => {
    const {
        className,
        modalPending,
        setModalPending,
    } = props;

    const redirectRefund = () => {
        window.location.href = '/refund'
    }

    return (
        <div>
            <Modal isOpen={modalPending.visible} className={className}>
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
                        <Col md="12" className="text-center modal-pending">
                            <p>Are you sure to cancel?</p>
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <Label
                                        for="orderNumber"
                                        className="col-md-auto"
                                    >
                                        Reason
                                    </Label>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <TextInput placeholder={"Reason"} />
                                </div>
                            </div>
                        </Col>
                        <Col md="12" className="text-center modal-return-pending">

                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <ButtonComponent
                                className="w-100"
                                label="Yes"
                                color="dark"
                                handleSubmit={redirectRefund}
                            />
                        </Col>
                        <Col md="6">
                            <ButtonComponent
                                className="w-100"
                                label="No"
                                color="dark"
                                handleSubmit={() =>
                                    setModalPending({ visible: false })
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
        modalPending: state.generalReducer.modalPending,
    };
};

export default connect(mapStateProps, { setModalPending })(
    ModalPending
);
