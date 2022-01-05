import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import TextInput from '../TextInput';
import { setModalLogin, setUser } from '../../redux'
import Button from '../Button';
import { closeLogin, setCookie, getCookie, getChartHandle, handleLogin } from '../../helpers/general'
import { login, token } from "../../helpers/request"

const ModalLogin = (props) => {
  const {
    buttonLabel,
    className,
    modalLogin,
    user,
    setModalLogin,
    setUser
  } = props;

  const redirectToRegister = () => {
    window.location.href = '/register'
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);
  const [submit, setSubmit] = useState(false)
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get('status');
  const emails = urlParams.get('email')
  console.log({ status, emails })

  // const readCookies = () => {
  //   const user = getCookie('email')
  //   if (user) {
  //     setSubmit(true)
  //   }
  // }

  // useEffect(() => {
  //   readCookies()
  // }, [])

  const toggle = () => {
    if (!user?.email) {
      var url = window.location.href
      const host_split = url.split('/')
      if (host_split[3] !== '') {
        window.location.href = '/'
      }
      else {
        closeLogin();
        setAlert(false);
      }
    }
  }

  const handleLoginSubmit = async () =>{
    setSubmit(true)
    await handleLogin(email, password)
    setSubmit(false)
  }

 

  return (
    <div>
      <Modal isOpen={status && emails ? true : modalLogin.visible} toggle={toggle} className={className}>
        <ModalBody className="modal-form-login">
          <Row className="Login-title">
            <Col className="text-center" md="12">
              <h3>Login</h3>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="padt10 pad0" md="3">
              <span className="form-title">Email</span>
            </Col>
            <Col className="pad0" md="9">
              <TextInput type="email" handleChange={(ev) => setEmail(ev.target.value)} value={email || emails} placeholder={'Enter Your Email...'} type="loginForm" />
            </Col>
            <Col className="padt10 pad0" md="3">
              <span className="form-title">Password</span>
            </Col>
            <Col className="pad0" md="9">
              <TextInput type="password" handleChange={(ev) => setPassword(ev.target.value)} value={password} placeholder={'Enter Your Password...'} type="loginForm" />
            </Col>
          </Row>
          {alert ? (<Row className="mt-4">
            <Col md="12">
              <Alert color="danger">
                [!] Please, fill Your email And Password
              </Alert>
            </Col>
          </Row>) : null}
          <Row>
            <Col className="text-center mt-4 border-0 buttonLogin" md="12">
              <Button handleSubmit={handleLoginSubmit} color={'dark'} label={'Login'} submiting={submit} />
            </Col>
            <Col className="text-center mt-2 border-0 buttonLogin" md="12">
              <Button handleSubmit={toggle} color={'light'} label={'Cancel'} />
            </Col>
            <Col className="text-center" md="12">
              <span onClick={redirectToRegister}>Didn't have a account? <u className="pointer">Register</u></span>

            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    modalLogin: state.generalReducer.modalLogin,
    user: state.authorizationReducer.user
  }
}
export default connect(mapStateToProps, { setModalLogin, setUser })(ModalLogin);