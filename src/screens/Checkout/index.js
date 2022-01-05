import React, { useState, useEffect } from "react";
import { Table, Row, Col, Input, Label, FormGroup } from "reactstrap";
import ChartList from "../../components/ChartList";
import numeral from "numeral";
import TextInput from "../../components/TextInput";
import { connect } from "react-redux";
import ButtonComponent from "../../components/Button";
import { openLogin } from "../../helpers/general";
import { setCheckout } from "../../redux";
import { styles } from "./styles";
const Checkout = (props) => {
  const { checkout } = props;
  return (
    <div className="mt-5">
      <Row>
        <Col className="text-center" md="12">
          <h1 className="title mb-4">
            <strong>Checkout</strong>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            {checkout.data.map((item, index) => {
              return (
                <Col md="12" lg="12" sm="12">
                  <div style={styles.flexRow}>
                    <img alt="images" width={"100px"} src={item.file_url} />
                    <div className="m-4">
                      <span>{item.product_name}</span>
                      <br />
                      <span>{item.qty * item.product_price}</span>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col>
          <Row>
            <Col md="12" sm="12" lg="12">
              <FormGroup row className="mb-3 ">
                <Label md={3} sm={12} for="name">
                  Name
                </Label>
                <Col md={9} sm={12}>
                  <TextInput
                    type="text"
                    //   handleChange={(ev) => setEmail(ev.target.value)}
                    // value={email || emails}
                    placeholder={"Name..."}
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col md="12" sm="12" lg="12">
              <FormGroup row className="mb-3 ">
                <Label md={3} sm={12} for="name">
                  Phone Number
                </Label>
                <Col md={9} sm={12}>
                  <TextInput
                    type="text"
                    //   handleChange={(ev) => setEmail(ev.target.value)}
                    // value={email || emails}
                    placeholder={"Phone Number..."}
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col md="12" sm="12" lg="12">
              <FormGroup row className="mb-3 ">
                <Label md={3} sm={12} for="name">
                  Address
                </Label>
                <Col md={9} sm={12}>
                  <TextInput
                  textArea
                    type="text"
                    //   handleChange={(ev) => setEmail(ev.target.value)}
                    // value={email || emails}
                    placeholder={"Address..."}
                  />
                </Col>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
          <Col sm="12" md="12" lg="12" style={styles.totalContainer}>
              <div>
                  <span>
                      Sub - Total
                  </span>
              </div>
              <div>
                  <span>
                     {checkout.total}
                  </span>
              </div>
          </Col>
      </Row>
      <Row>
          <Col sm="12" md="12" lg="12" style={styles.totalContainer}>
              <div>
                  <span>
                      Shipping Cost
                  </span>
              </div>
              <div>
                  <span>
                     Rp.30000
                  </span>
              </div>
          </Col>
      </Row>
      <hr/>
      <Row>
          <Col sm="12" md="12" lg="12" style={styles.totalContainer}>
              <div>
                  <span>
                    Total
                  </span>
              </div>
              <div>
                  <span>
                     Rp.20300000
                  </span>
              </div>
          </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    checkout: state.generalReducer.checkout,
  };
};

export default connect(mapStateToProps, { setCheckout })(Checkout);
