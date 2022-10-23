import React from "react";
import logo from '../new-logo.svg';
import moment from 'moment';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return (
        <Container className='footerMain' fluid>
            <Row className='footerBody'>
                <Col>
                    <img alt='k8s observatory' src={logo} style={{ height: 70 }} />
                </Col>
                <Col>
                    <div className='linkStyleTitle'>LINKS</div>
                    <div className='copyRight'>Use of this platform is subject to these <a href="https://github.com/dishantkamble/k8s-observatory/blob/main/LICENSE">terms</a>.</div>
                </Col>
                <Col>
                    <div className='linkStyleTitle'>CONTACT US</div>
                    <div className='copyRight'>
                        <a href="mailto:dishantk@gmail.com" target={"_blank"} rel="noopener noreferrer">
                            <img className='divLogoImg' src={'https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-email-2.png'} alt="Email link to send a mail to me." />
                        </a>
                        {' '}
                        <a href="https://twitter.com/dishantk" target={"_blank"} rel="noopener noreferrer">
                            <img className='divLogoImg' src={'https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-twitter-1.png'} alt="Follow me on twitter" />
                        </a>
                    </div>
                </Col>
                <Col>
                    <div className='linkStyleTitle'>NOTICES</div>
                    <div className='copyRight'>
                        Copyright © <a href="https://github.com/dishantkamble" target="_blank" rel="noopener noreferrer">Dishant Kamble</a> {moment().format('YYYY')}.
                        <br /> All rights reserved.
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
