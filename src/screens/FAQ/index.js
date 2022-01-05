import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap'
import Accordion from '../../components/Accordion'

import { faqList } from '../../helpers/request'
const Faq = (props) => {
    const [data, setData] = useState()
    const loadData = async () => {
        await faqList().then((res) => {
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
                <Accordion item={item} />
            )
            )
        )
    }
    return (
        <Container>
            <h3 style={{ marginTop: '20px', marginBottom: '30px' }}>Frequently Asked Questions</h3>
            {renderItem()}
        </Container>
    );
}


export default Faq;