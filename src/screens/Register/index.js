import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Label, Row, Col, Input, Container, Button, Card, CardTitle } from 'reactstrap'
import ButtonRegister from '../../components/Button'
import TextInput from '../../components/TextInput';
import { styles } from "../Password/styles";
import { openLogin } from '../../helpers/general'
import { register } from "../../helpers/request"

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('male')
    const [gender, setGender] = useState('male')
    const [date, setDate] = useState('');
    const [submit, setSubmit] = useState(false)

    const handleRegister = async () => {
        setSubmit(true)
        const data = {
            username: username,
            password: password,
            email: email,
            birthdate: date,
            gender: gender,
            phone_number: phoneNumber,

        }
        await register(data).then((res) => {
            setSubmit(false)
            console.log('res: ', res)
        })
            .catch((err) => {
                setSubmit(false)
                alert(err.data.message)
            })
    }


    // const getMonth = date.getMonth() + 1
    // const renderMonth = () => {
    //     if (getMonth < 10) {
    //         return '0' + getMonth
    //     }
    //     else {
    //         return getMonth
    //     }
    // }

    // const todaysDate = date.getFullYear() + '-' + renderMonth() + '-' + date.getDate()
    // const [dtp, setDtp] = useState(todaysDate)

    return (
        <div className="profile-container ">
            <Card>
                <CardTitle className="center-title">
                    <h1>Register</h1>
                </CardTitle>
                <Form className="ms-5 me-5 mb-5">
                    <FormGroup row className="mb-3 ">
                        <Label md={3} sm={12} for="name">Username</Label>
                        <Col md={9} sm={12}>
                            <TextInput
                                id={'name'}
                                name={'name'}
                                placeholder={'Enter Your Name'}
                                handleChange={(ev) => setUsername(ev.target.value)} />

                        </Col>
                    </FormGroup>
                    <FormGroup row className="mb-3">
                        <Label md={3} sm={12} for="email">Email</Label>
                        <Col md={9} sm={12}>
                            <TextInput
                                className="bg-light"
                                id={'email'}
                                name={'email'}
                                placeholder={'Enter Your Email'}
                                type={'email'}
                                handleChange={(ev) => setEmail(ev.target.value)}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className="mb-3">
                        <Label md={3} sm={12} for="email">Password</Label>
                        <Col md={9} sm={12}>
                            <TextInput
                                className="bg-light"
                                id={'email'}
                                name={'email'}
                                placeholder={'Enter Your Password'}
                                type={'Password'}
                                handleChange={(ev) => setPassword(ev.target.value)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mb-3">
                        <Label md={3} sm={12} for="email">Confirm Password</Label>
                        <Col md={9} sm={12}>
                            <TextInput
                                className="bg-light"
                                id={'email'}
                                name={'email'}
                                placeholder={'Confirm Your Password'}
                                type={'password'}

                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className="mb-3">
                        <Label md={3} sm={12} for="email">Phone Number</Label>
                        <Col md={9} sm={12}>
                            <TextInput
                                className="bg-light"
                                id={'email'}
                                name={'email'}
                                placeholder={'Enter Your Phone Number'}
                                handleChange={(ev) => setPhoneNumber(ev.target.value)}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className="mb-3">
                        <Label md={3} sm={12} for="birthdate">Birthdate {date}</Label>
                        <Col md={9} sm={12}>
                            <Input
                                style={styles.inputContainer}
                                id="birthdate"
                                name="birthdate"
                                placeholder="time placeholder"
                                type="date"
                                value={date}
                                onChange={(ev) => setDate(ev.target.value)}

                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mb-3">
                        <Label md={3} sm={3} >
                            Gender
                        </Label>
                        <Col md={4} sm={4} className=" pt-2">
                            <Input
                                name="radio1"
                                type="radio"
                                checked={gender === 'male' ? true
                                    : false}
                                onChange={(ev) => setGender('male')}
                            />
                            {' '}
                            <Label check>
                                Male
                            </Label>
                        </Col>
                        <Col md={5} sm={5} className="pt-2">
                            <Input
                                name="radio2"
                                type="radio"
                                checked={gender === 'female' ? true
                                    : false}
                                onChange={(ev) => setGender('female')}
                            />
                            {' '}
                            <Label>
                                Female
                            </Label>
                        </Col>
                    </FormGroup>
                    <Row >
                        <Col md={12} className="d-flex justify-content-center align-items-center">
                            <ButtonRegister  handleSubmit={handleRegister} color={'dark'} label={'Register Now'} submiting={submit} />
                        </Col>
                        <Col md={12} className="d-flex justify-content-center align-items-center" >
                            <span>Already have an account? Login Here</span>
                        </Col>

                    </Row>
                </Form>
            </Card>
        </div>


    )
}

export default Register;