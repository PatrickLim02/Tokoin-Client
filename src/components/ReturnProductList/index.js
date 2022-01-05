import React from 'react'
import { Form, FormGroup, Label, Row, Col, Input, Container, Button, Card, CardTitle } from 'reactstrap'
import Image1 from '../../assets/jpg/product1.jpg'
function ReturnProductList(props) {
    const {item} = props
    return (
        <Row className="mb-2" index={item.id}>
            <Col md="1" xs="1" className="pad0">
                <Input type="checkbox" />
            </Col>
            <Col md="11"  xs="11" className="pad0 d-flex">
                <img src={item.image} width={'150px'} />
                <div className="ms-2">
                    <div className="mb-5">
                        <span>{item.product_name}</span><br />
                        <span>{item.variant}</span><br />
                    </div>

                    <div>
                        <span>{item.qty} pcs</span>
                        <span> x {item.price}</span>
                    </div>
                </div>

            </Col>
            <Col md={3}>

            </Col>
        </Row>
    )
}

export default ReturnProductList
