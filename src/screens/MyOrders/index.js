import React,{useEffect} from "react";
import { Table } from "reactstrap";
import { myOrderList } from "./dummy_myOrderList";
import MyOrderList from "../../components/MyOrdersList";
import { openLogin } from "../../helpers/general";
const MyOrders = (props) => {
    const renderItem = () => {
        return myOrderList.map((item, index) => (
            <MyOrderList key={index} item={item} />
        ));
    };
    useEffect(()=>{
        openLogin()
    },[])
    return (
        <div className="background-color">
            <div className="card">
                <h1 className="title">My Orders</h1>
                <Table borderless>
                    <tr>
                        <td>Order No.</td>
                        <td>Date</td>
                        <td>No. of Items</td>
                        <td>Total</td>
                        <td>Status</td>
                        <td>&nbsp;</td>
                    </tr>
                    {renderItem()}
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;
