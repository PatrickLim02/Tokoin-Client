import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Accordion(props) {
    
    const { item } = props
    console.log('item:',item)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (

        <div className="mt-2">
            <div onClick={toggle} className="shadow accordion-header bg-dark text-light" >
                <h5>{item.id_faq}. {item.faq_title}</h5>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="mr-5" />
            </div>

            <Collapse isOpen={isOpen} className="w-100">
                <Card className="p-2 rounded-0">
                    <CardBody>
                        {item.faq_description}
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}

export default Accordion