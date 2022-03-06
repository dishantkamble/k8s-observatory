import React, { Fragment } from 'react';
import { ReactComponent as Logo } from '../logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
    return (
        <Fragment>
            <Navbar bg='light' export='lg'>
                <Container>
                    <Navbar.Brand href='/'>
                        <Logo title='Home' style={{ height: 25, width: 70 }} />
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
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default NavigationBar;
