import React, { Fragment } from 'react';
import logo from '../new-logo.svg';
import gitlogo from '../git-contribute-logo.svg';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
    return (
        <Fragment>
            <Navbar 
            variant='light'
            expand='lg'
            sticky='top'
            >
                <Container>
                    <Navbar.Brand href='/'>
                        <Image alt='Home' src={logo} style={{ height: 35 }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <NavDropdown title='Resources' id='basic-nav-dropdown'>
                                <NavDropdown.Item href='/nodes'>Nodes</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='/pods'>Pods</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav.Item>
                        <Nav.Link href="https://github.com/dishantkamble/k8s-observatory">
                            <Image className='divLogoImg' src={gitlogo} alt="Visit Github to contribute" />
                        </Nav.Link>
                    </Nav.Item>
                </Container>
            </Navbar>
            <br/>
        </Fragment>
    );
};

export default NavigationBar;
