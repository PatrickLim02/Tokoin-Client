import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Input, Button } from "reactstrap";
import { styles } from "./styles";
import {connect} from 'react-redux'
import numeral from 'numeral';
import {setChart,setCheckout} from '../../redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "../Button";
import {useDidUpdateEffect} from '../../helpers/hooks'
function ChartList(props) {
    const { item,chart,setChart,handleTotalCallback,total,selectAll,setCheckout, checkout} = props;
    const [qty, setQty] = useState(item.qty)
    const [checked, setChecked] = useState(false)
console.log('sds', item)
    const addQty = () =>{
        setQty(qty + 1)
        const objIndex =  chart.findIndex((obj => obj.id === item.id));
        console.log(chart[objIndex])
        chart[objIndex].qty = item.qty + 1
        setChart({data: chart})
        handleTotalCallback(total + item.product_price ) 
    }
    const takeoutQty = () =>{
        setQty(qty - 1)
        const objIndex =  chart.findIndex((obj => obj.id === item.id));
        console.log(chart[objIndex])
        chart[objIndex].qty = item.qty - 1
        setChart({data: chart})
        handleTotalCallback(total - item.product_price ) 
    }
    useDidUpdateEffect(()=>{
        if(selectAll){
            setChecked(!selectAll)
        }
    },[selectAll])
    
    const handleTotal = (ev) =>{
        if(!selectAll){
            if(ev){
                setChecked(true)
                handleTotalCallback(total + item.product_price * item.qty) 
            }
            if(!ev) {
                setChecked(false)
                handleTotalCallback(total - item.product_price * item.qty)
            }
        }
    }
    const checkedValue = (e) =>{
        handleTotal(e.target.checked)
        if(e.target.checked){
         setCheckout({data: [...checkout, item]})
        }
        else{
            const deleted = checkout.filter(checkouts => checkouts.id !== item.id);
            console.log('delete : ', deleted)
            setCheckout({data: deleted})
        }
    }
    return (
        <tr className="orderContainer" index={item.id}>
            <td><Input
            checked={selectAll ? selectAll :checked}
                type="checkbox"
              onChange={(e) => checkedValue(e)}
            /></td>
            <td>
                <div style={styles.flexRow}>
                    <img width={'100px'} src={item.file_url} />
                    <div className="m-4">
                        <span>{item.name}</span><br/>
                        <span>{item.color}</span>
                    </div>
                </div>
            </td>
            <td>   {`Rp ${numeral(parseFloat(item.product_price)).format('0,0')}`}</td>
            <td> <ButtonComponent handleSubmit={takeoutQty} label="-"/> {qty} <ButtonComponent handleSubmit={addQty} label="+"/></td>
            <td>{`Rp ${numeral(parseFloat(qty * item.product_price)).format('0,0')}`}</td>
            <td><FontAwesomeIcon size={'2x'} icon={faTrashAlt} /></td>
        </tr>
    );
}
const mapStateToProps = (state) => {
    return {
        chart: state.generalReducer.chart.data,
        checkout: state.generalReducer.checkout.data,
    }
}

export default connect(mapStateToProps,{setChart, setCheckout})(ChartList);
