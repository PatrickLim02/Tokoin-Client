import React from 'react'
import { Modal, ModalBody, Col, Row } from "reactstrap"
import { connect } from "react-redux"
import { setModalConfirmPayment } from "../../redux";
import ButtonComponent from '../Button';

const ModalConfirmPayment = (props) => {
    const { className, modalConfirmPayment, setModalConfirmPayment } = props
    const redirectToMyOrders = () => {
        window.location.href = '/my-orders'
    }
    return (
        <div>
            <Modal isOpen={modalConfirmPayment.visible} className={className}>
                <ModalBody>
                    <Row className="justify-center-self">
                        <Col
                            md="12"
                            className="text-center justify-content-center"
                        >
                            <h2>Thank You</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center modal-waiting-for-payment">
                            <div class="d-flex flex-column mb-0">
                                <div class="p-4 bd-highlight">
                                    <div className="px-2">Please go to 'My Order' to check your status.</div>
                                    <div className="px-2">We'll keep you updated!</div>
                                </div>
                            </div>
                            <Row>
                                <Col className="text-center mt-4 border-0 buttonLogin" md="12">
                                    <ButtonComponent
                                        className="w-100 p-2"
                                        label="Go to My Orders"
                                        color="dark"
                                        handleSubmit={redirectToMyOrders}
                                    />
                                </Col>
                                <Col className="text-center mt-2 border-0 buttonLogin" md="12">
                                    <ButtonComponent
                                        handleSubmit={() => setModalConfirmPayment({ visible: false })}
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
    )
}

const mapStateToProps = (state) => {
    return {
        modalConfirmPayment: state.generalReducer.modalConfirmPayment
    }
}

export default connect(mapStateToProps, { setModalConfirmPayment })(ModalConfirmPayment)
