import React, { useState, useEffect } from "react";
import { Table, Row, Col, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import { myOrderList } from "./dummy_myOrderList";
import ChartList from "../../components/ChartList";
import numeral from 'numeral';
import { connect } from 'react-redux'
import ButtonComponent from "../../components/Button";
import { openLogin } from "../../helpers/general";
import {setCheckout} from '../../redux'
const ChartScreen = (props) => {
    const { chart, setCheckout } = props;
    const history = useHistory();
    const [total, setTotal] = useState(0)
    const [selectAll, setSelectAll] = useState(false)
    useEffect(()=>{
        setCheckout({data: []})
        openLogin()
    },[])
    const handleTotalCallback = (ev) =>{
        setTotal(ev)
    }
    const renderItem = () => {
        return chart.map((item, index) => (
            <ChartList selectAll={selectAll} total={total} handleTotalCallback={handleTotalCallback} key={index} item={item} />
        ));
    };
    const handleSelectAll = (ev) =>{
        if(ev){
            setSelectAll(ev)
            let totalPrice = chart.reduce(function (accumulator, item) {
                return accumulator + item.harga * item.qty;
              }, 0);
              setTotal(totalPrice)
              setCheckout({data: chart})
        }
        if(!ev){
            setSelectAll(false) 
            setTotal(0)
            setCheckout({data: []})
        }
    }
    const redirectCheckoutScreen = () =>{
        setCheckout({total: total})
        history.push('/checkout')
    }
    if(chart.length === 0){
        return (
            <Row>
                <Col md="12 text-center mt-5">
                   <h3>There're No Products Saved on Chart </h3>
                </Col>
            </Row>
        )
    }
    return (
        <div className="mt-5">
            <Row>
                <Col className="text-center" md="12">
                    <h1 className="title mb-4">Shopping Chart</h1>
                </Col>
            </Row>
            <Table>
                <tr>
                    <th><Input
                        type="checkbox"
                      onChange={(ev) => handleSelectAll(ev.target.checked)}
                    /></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                {renderItem()}
            </Table>
            <Row>
                <Col md="6">
                    <h2>Total</h2>
                </Col>
                <Col md="3 text-right">
                    <h2>{`Rp ${numeral(parseFloat(total)).format('0,0')}`}</h2>
                </Col>
                <Col md="3 text-right">
                  <ButtonComponent handleSubmit={()=> redirectCheckoutScreen()}  disabled={total === 0 ? false: true} label={'Checkout'} color="dark"/>
                </Col>
            </Row>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        chart: state.generalReducer.chart.data
    }
}

export default connect(mapStateToProps, {setCheckout, setCheckout})(ChartScreen);
