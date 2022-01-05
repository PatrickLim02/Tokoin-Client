import React from "react";
import { useHistory } from "react-router-dom";

function MyOrderList(props) {
    const { item } = props;
    const history = useHistory();
    const redirectViewDetailes = () => {
        history.push(
            `/order-detail/${item.id}?status=${item.status}&numberOrder=${item.numberOrder}`
        );
    };

    return (
        <tr className="orderContainer" index={item.id}>
            <td>{item.numberOrder}</td>
            <td>{item.date}</td>
            <td>{item.numberOfItems}</td>
            <td>{item.total}</td>
            <td>{item.status}</td>
            <td onClick={redirectViewDetailes} className="viewDetails">
                View Details
            </td>
        </tr>
    );
}

export default MyOrderList;
