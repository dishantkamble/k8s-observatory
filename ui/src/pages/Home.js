import React, { Fragment } from 'react';
import newLogo from '../new-logo.svg';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
    return (
        <Fragment>
            <NavigationBar />
            <div className='App'>
                <img src={newLogo} alt='Home' style={{ height: 200, width: 355 }} />
            </div>
            <Container className='main-grid'>
                <Row>
                    <Col>
                        <Card className='grid-item'>
                            <Card.Body>
                                <Card.Title>Nodes</Card.Title>
                                <Card.Text>Monitor Nodes in the cluster</Card.Text>
                                <Button variant='primary' size='sm' href='/nodes'>Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='grid-item'>
                            <Card.Body>
                                <Card.Title>Pods</Card.Title>
                                <Card.Text>Monitor Pods in the cluster</Card.Text>
                                <Button variant='primary' size='sm' href='/pods'>Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Fragment>
    );
};

export default Home;
