import React, { useEffect, useState } from 'react';
import CardProductList from '../../components/CardProductList';
import { Row, Col } from 'reactstrap';
import { productList } from '../../helpers/request'
const Shop = (props) => {
    const [data, setData] = useState()
    const loadData = async () => {
        await productList().then((res) => {
            setData(res.data)
            console.log('data:', res)
        })
            .catch((err) => {
                console.log('Failed to request FaqList: ', err)
            })
    }
    useEffect(() => {
        loadData()
    }, [])
    const renderItem = () => {
        return (
            data?.map((item, index) =>
            (
                <Col md="3" sm="6" xs="12" key={index}>
                    <CardProductList item={item} size='90%' />
                </Col>
            )
            )
        )
    }

    return (
        <div>
            <div className="center-title">
                <h1 >Shop</h1>
            </div>

            <Row>
                {renderItem()}
            </Row>

        </div>
    );
}


export default Shop;