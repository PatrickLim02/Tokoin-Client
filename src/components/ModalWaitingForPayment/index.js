import React, { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Alert,
    Row,
    Col,
    Button,
} from "reactstrap";
import { connect } from "react-redux";
import { setModalWaitingForPayment } from "../../redux";
import ButtonComponent from "../Button";
import { useHistory } from "react-router-dom";

const ModalWaitingForPayment = (props) => {
    const {
        className,
        modalWaitingForPayment,
        setModalWaitingForPayment,
    } = props;
    const history = useHistory()

    const redirectConfirmPayment = () => {
        window.location.href = '/confirm-payment'
    }

    return (
        <div>
            <Modal isOpen={modalWaitingForPayment.visible} className={className}>
                <ModalBody>
                    <Row className="justify-center-self">
                        <Col
                            md="12"
                            className="text-center justify-content-center"
                        >
                            <h2>Confirm Payment</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center modal-waiting-for-payment">
                            <div class="d-flex flex-column mb-0">
                                <div class="p-2 bd-highlight">
                                    Please transfer your payment to
                                </div>
                                <div class="p-2 bd-highlight">
                                    <div className="px-2">BCA</div>
                                    <div className="px-2">8305123456</div>
                                    <div className="px-2">Kotak In</div>
                                </div>
                                <div class="p-2 bd-highlight">and confirm your payment</div>
                            </div>
                            <Row>
                                <Col className="text-center mt-4 border-0 buttonLogin" md="12">
                                    <ButtonComponent
                                        className="w-100 p-2"
                                        label="Go to Payment"
                                        color="dark"
                                        handleSubmit={redirectConfirmPayment}
                                    />
                                </Col>
                                <Col className="text-center mt-2 border-0 buttonLogin" md="12">
                                    <ButtonComponent
                                        handleSubmit={() => setModalWaitingForPayment({ visible: false })}
                                        className="w-100"
                                        label="Cancel"
                                        color="light"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </div>
    );
};

const mapStateProps = (state) => {
    return {
        modalWaitingForPayment: state.generalReducer.modalWaitingForPayment,
    };
};

export default connect(mapStateProps, { setModalWaitingForPayment })(
    ModalWaitingForPayment
);
