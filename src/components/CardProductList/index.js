import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Link, useHistory, useRouteMatch } from "react-router-dom";
function CardProductList(props) {
    const {item, size} = props
    const history = useHistory();
    const redirectProductDetail = () =>{
        history.push(`/product/${item.id_product_header}`)
    }
    
    return (
        <div>    
            <Card {...props} body index={item.id_product_header} className="mb-3 shadow">
            <img width={size} src={item.file_url} alt="Card image cap" /> 
                <CardTitle tag="h5" className="mt-2">{item.product_name}</CardTitle>
                <CardText>IDR {item.product_price}</CardText>  
                <Button onClick={redirectProductDetail} color="warning">Details</Button>        
            </Card>      
        </div>

    );

}


export default CardProductList;