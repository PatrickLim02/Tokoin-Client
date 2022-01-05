import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { Form, FormGroup, Label, Row, Col, Input, Container, Button, Card, CardTitle, Alert } from 'reactstrap'
import TextInput from '../../components/TextInput';
import { styles } from "../Password/styles";
import { openLogin } from '../../helpers/general'
import { getUserProfile, changeUserProfile } from '../../helpers/request'
import authorizationReducer from '../../redux/authorizationReducer/authorizationReducer';
import moment from 'moment'
import { setUser } from '../../redux'
function Profile(props) {
    const { userID } = props
    const [id, setID] = useState()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [gender, setGender] = useState('male')
    const formatDate = moment(birthdate).format('YYYY-MM-DD')
    useEffect(() => {
        loadData()
    }, [userID])

    const handleSubmitProfile = async () => {
        const data = {
            id_user: userID.id_users,
            username: name,
            phone_number: phoneNumber,
            birthdate: birthdate,
            gender: gender
        }
        const response = await changeUserProfile(data)
        if (response.status === 200) {
            <div>
                <Alert color="primary">
                    This is a primary alert — check it out!
                </Alert>

            </div>

        }


    }

    const loadData = () => {
        if (userID?.id_users) {
            getUserProfile({ id_user: userID.id_users }).then((res) => {
                setName(res.data[0].username)
                setEmail(res.data[0].email)
                setPhoneNumber(res.data[0].phone_number)
                setBirthdate(res.data[0].birthdate)
                setGender(res.data[0].gender)
                console.log('data:', res)
            })
                .catch((err) => {
                    console.log('Failed to request data: ', err)
                })
        }
    }



    return (
        <div className="profile-container ">
            <Card>
                <CardTitle className="center-title">
                    <h1>Profile</h1>
                </CardTitle>
                <Form className="ms-5 me-5 mb-5">
                    <FormGroup row className="mb-3 ">
                        <Label md={3} sm={12} for="name">Name</Label>
                        <Col md={9} sm={12}>
                            <TextInput
                                id={'name'}
                                name={'name'}
                                placeholder={'Enter Your Name'}
                                value={name}
                                handleChange={(ev) => setName(ev.target.value)}

                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mb-3">
                        <Label md={3} sm={12} for="phone">Phone Number</Label>
                        <Col md={9} sm={12}>
                            <TextInput
                                id={'phone'}
                                name={'phone'}
                                placeholder={'Enter Your Phone Number'}
                                handleChange={(ev) => setPhoneNumber(ev.target.value)}
                                value={phoneNumber} />
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
                                value={email}
                                disabled
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mb-3">
                        <Label md={3} sm={12} for="birthdate">Birthdate</Label>
                        <Col md={9} sm={12}>
                            <Input
                                style={styles.inputContainer}
                                id="birthdate"
                                name="birthdate"
                                handleChange="time placeholder"
                                type="date"
                                onChange={(ev) => setBirthdate(ev.target.value)}
                                value={formatDate}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mb-3" onChange={(ev) => setGender(ev.target.value)}>
                        <Label md={3} sm={3} >
                            Gender {gender}
                        </Label>
                        <Col md={4} sm={4} className=" pt-2" >
                            <Input
                                name="radio2"
                                type="radio"
                                value={'male'}
                                checked={gender === 'male' ? true : false}
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
                                value={'female'}
                                checked={gender === 'female' ? true : false}
                            />
                            {' '}
                            <Label check>
                                Female
                            </Label>
                        </Col>
                    </FormGroup>
                    <Row>
                        <Button onClick={handleSubmitProfile} className="click-style mb-2 bg-dark" >
                            Save Changes
                        </Button>
                    </Row>
                </Form>
            </Card>
        </div>


    )
}

const mapStateToProps = (state) => {
    return {
        userID: state.authorizationReducer.user
    };
};

export default connect(mapStateToProps, { setUser })(Profile);