import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Label, Row, Col, Input, Container, Button, Card, CardTitle } from 'reactstrap'
import TextInput from '../../components/TextInput';
import { styles } from "./styles";
import { openLogin } from '../../helpers/general'
function Password() {
    const date = new Date()
    const getMonth = date.getMonth() + 1
    const renderMonth = () => {
        if (getMonth < 10) {
            return '0' + getMonth
        }
        else {
            return getMonth
        }
    }
    useEffect(() => {
        openLogin()
    }, [])
    const todaysDate = date.getFullYear() + '-' + renderMonth() + '-' + date.getDate()

    const [dtp, setDtp] = useState(todaysDate)
    console.log(dtp)
    return (
        <div className="profile-container ">
            <Card>
                <CardTitle className="center-title ">
                    <h1>Change Password</h1>
                </CardTitle>
                <Form className="ms-5 me-5 mb-5">
                    <FormGroup row className="mb-3 ">
                        <Col md={3} sm={12}>
                            <Label for="name">Old Password</Label>
                        </Col>
                        <Col md={9} sm={12}>
                            <TextInput
                                id={'name'}
                                name={'name'}
                                placeholder={'Enter Your Old Password'}

                                type="password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mb-3">
                        <Col md={3} sm={12}>
                            <Label for="name">New Password</Label>
                        </Col>
                        <Col md={9} sm={12}>
                            <TextInput
                                id={'phone'}
                                name={'phone'}
                                placeholder={'Enter Your New Password'}
                                type="password"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mb-3">
                        <Col md={3} sm={12}>
                            <Label for="name">Confirm Password</Label>
                        </Col>
                        <Col md={9} sm={12}>
                            <TextInput
                                id={'phone'}
                                name={'phone'}
                                placeholder={'Re-Enter Your New Password'}
                                type="password" />
                        </Col>
                    </FormGroup>
                    <Row>
                        <Button className="click-style mb-2 bg-dark">
                            Save Changes
                        </Button>
                    </Row>
                </Form>
            </Card>
        </div>


    )
}

export default Password;