import React from 'react'
import { Form, FormGroup, Label, Row, Col, Card, CardTitle } from "reactstrap";
import TextInput from "../../components/TextInput";
import ButtonComponent from "../../components/Button";
import { useHistory } from 'react-router-dom';

const ConfirmReturn = () => {
    const history = useHistory()
    const redirectToMyOrder = () => {
        history.push('/my-orders')
    }
    return (
        <div className="profile-container vh-100 p-5">
            <Card>
                <CardTitle className="title">
                    <h1 className="border-bottom border-dark">Confirm Return</h1>
                    <h5 className="border-bottom border-dark pb-1">005/SALES/X/2021</h5>
                </CardTitle>
                <Form className="ms-5 me-5 mb-5">
                    <FormGroup row className="mb-3">
                        <Label md={3} sm={12} for="bankName">Bank Name</Label>
                        <Col md={9} sm={12}>
                            <TextInput
                                id={'bankName'}
                                name={'Bank Name'}
                                placeholder={'Enter Your Bank Name'}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mb-3">
                        <Label md={3} sm={12} for="accountNumber">Account Number</Label>
                        <Col md={9} sm={12}>
                            <TextInput
                                id={'accountNumber'}
                                name={'accountNumber'}
                                placeholder={'Enter Your Account Number'}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mb-3">
                        <Label md={3} sm={12} for="accountName">Account Name</Label>
                        <Col md={9} sm={12}>
                            <TextInput
                                className="bg-light"
                                id={'accountName'}
                                name={'accountName'}
                                placeholder={'Enter Your Account Name'}
                                type={'text'}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mb-3">
                        <Label md={3} sm={12} for="accountName">Refund Amount</Label>
                        <Col md={9} sm={12}>
                            <TextInput
                                className="bg-light"
                                id={'refundAmount'}
                                name={'refundAmount'}
                                placeholder={'Enter Your Refund Amount'}
                                type={'text'}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mb-3">
                        <Label md={3} sm={12} for="accountName">Return AWB</Label>
                        <Col md={9} sm={12}>
                            <TextInput
                                className="bg-light"
                                id={'returnAWB'}
                                name={'returnAWB'}
                                placeholder={'Enter Your Return of AWB'}
                                type={'text'}
                            />
                        </Col>
                    </FormGroup>
                    <Row>
                        <Col md="6">
                            <ButtonComponent label={"Cancel"} color="dark" className="w-100" />
                        </Col>
                        <Col md="6">
                            <ButtonComponent handleSubmit={redirectToMyOrder} label={"Send"} color="dark" className="w-100" />
                        </Col>
                    </Row>
                </Form>
            </Card>
        </div>
    )
}

export default ConfirmReturn
