import React, { Fragment } from 'react';
import NavigationBar from '../components/NavigationBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <Fragment>
            <main>
                <NavigationBar />
            </main>
            <div className='App'>
                <h2>K8s Observatory</h2>
            </div>
            <div className='main-grid'>
                <Card style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Title>Nodes</Card.Title>
                        <Card.Text>Monitor Nodes in the cluster</Card.Text>
                        <Button variant='primary' href='/nodes'>Details</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Title>Pods</Card.Title>
                        <Card.Text>Monitor Pods in the cluster</Card.Text>
                        <Button variant='primary' href='/pods'>Details</Button>
                    </Card.Body>
                </Card>
            </div>
        </Fragment>
    );
};

export default Home;
