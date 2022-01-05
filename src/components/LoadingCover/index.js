import React, { useEffect, useState } from 'react';
import {Container} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner} from "@fortawesome/free-solid-svg-icons"
import { styles } from './styles';
import { ReactComponent as Logo } from '../../assets/svg/logoIcon.svg'
const TodayComponent = (props) => {
    const {title,size, color} = props
    return (
        <Container {...props} style={styles.loadingContainer}>
            {title ? <Logo width="100" /> : null}<br/> <br/><br/>
            <FontAwesomeIcon color={color} size={size} icon={faSpinner} spin /><br/><br/>
            {title ? <h4>Wait a Moment...</h4>: null}
        </Container>
    );
}

export default TodayComponent;
