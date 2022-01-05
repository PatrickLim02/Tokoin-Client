import React from 'react'
import { styles } from "./styles";
import { Form, FormGroup, Label, Row, Col, Input, Container, Button, Card, CardTitle } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <div style={styles.containerFooter}>
            <div style={styles.brandLogo} className="footer-font">
                by kotak in.
            </div>
            <div >
                <FontAwesomeIcon icon={faWhatsapp} style={styles.whatsapp}/>
                +62 851 5636 025
                <FontAwesomeIcon icon={faEnvelope} style={styles.mail}/>
                Kotakinmdn@gmail.com
            </div>
            <div style={styles.socialMedia}>
                <FontAwesomeIcon icon={faFacebook} style={styles.facebookIcon}/>
                <FontAwesomeIcon icon={faInstagram} style={styles.instagramIcon}/>
                <FontAwesomeIcon icon={faTwitter} style={styles.instagramIcon}/>
            </div>

        </div>
    )
}

export default Footer
