import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Label, Row, Col, Input, Container, Button, Card, CardTitle } from 'reactstrap'
import ReturnProductList from '../../components/ReturnProductList'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/fontawesome-svg-core'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { returnProductListItem } from './dummy_returnProductList'
function ReturnProduct(props) {
    const renderItem = () => {
        return (
            returnProductListItem.map((item, index) =>
            (     
                    <ReturnProductList item={item}/>      
            )
            )
        )
    }

    return (
        <div className="return-container ">
            <Card className="ps-4 pe-4">
                <Row className="mb-1">
                    <Col md="12" className="border-bot pad0">Return</Col>
                </Row>
                <Row className="mb-1">
                    <Col md={12} className="border-bot pad0">001/SALES/X/2021</Col>
                </Row>
                <Row className="mb-3">
                    <Col md="1" xs="1" className="pad0">
                        <Input type="checkbox" />
                    </Col>
                    <Col md="11" xs="11">
                        ORDERS
                    </Col>
                </Row>
                
                {renderItem()}
       
              

                <Row className="mb-1">
                    <Col className="pad0">
                        Total
                    </Col>
                    <Col className="text-right">
                        IDR 50.000
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col className="pad0">Reason For Return/Refund</Col>
                </Row>
                <Row className="mb-1">
                    <Col className="pad0">
                        <Input type="select" >
                            <option>Broken</option>
                            <option>Wrong Variant</option>
                        </Input>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col className="pad0">Upload Image (optional)</Col>
                </Row>
                <Row className="mb-1">
                    <Col className="pad0">
                        <Button className="me-1"><FontAwesomeIcon icon={faUpload} /> </Button>
                        <Button className="me-1"><FontAwesomeIcon icon={faUpload} /></Button>
                        <Button><FontAwesomeIcon icon={faUpload} /></Button>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col className="ps-0">
                        <Button className="w-100 bg-dark">Send</Button>
                    </Col>
                    <Col className="pe-0">
                        <Button className="w-100 bg-dark">Cancel</Button>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default ReturnProduct