import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import ApiUrlConstant from '../components/ApiUrlConstant';
import ContainerDetail from '../components/ContainerDetail';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import { Tabs } from '@mantine/core';

const Pod = () => {
    const { podName } = useParams();
    const { namespace } = useParams();
    const [loading, setLoading] = useState(false);
    const [pod, setPod] = useState();

    const getApi = () => {
        let api = ApiUrlConstant + '/k8s-observatory/api/pods/' + podName + '/namespace/' + namespace;

        fetch(api).then(response => {
            return response.json();
        }).then(data => {
            setLoading(true);
            setPod(data);
        });
    };

    useEffect(() => {
        getApi();
    }, []);

    return (
        <Fragment>
            <NavigationBar />
            <h3>Pod Details</h3>
            {
                loading === false ? (
                    <Spinner animation='border' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </Spinner>
                ) : (
                    <div>
                        <br />
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h5>Name: </h5>{pod.name}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Namespace: </h5>{pod.namespace}
                            </ListGroup.Item>
                            {
                                pod.status === 'RUNNING' ? (
                                    <ListGroup.Item variant='success'>
                                        <h5>Status: <Badge bg='success' text='light'>{pod.status}</Badge></h5>
                                    </ListGroup.Item>
                                ) : (
                                    pod.status === 'SUCCEEDED' ? (
                                        <ListGroup.Item variant='secondary'>
                                            <h5>Status: <Badge bg='secondary' text='light'>{pod.status}</Badge></h5>
                                        </ListGroup.Item>
                                    ) : (
                                        pod.status === 'FAILED' ? (
                                            <ListGroup.Item variant='danger'>
                                                <h5>Status: <Badge bg='danger' text='light'>{pod.status}</Badge></h5>
                                            </ListGroup.Item>
                                        ) : (
                                            <ListGroup.Item variant='warning'>
                                                <h5>Status: <Badge bg='warning' text='light'>{pod.status}</Badge></h5>
                                            </ListGroup.Item>
                                        )
                                    )
                                )
                            }
                        </ListGroup>
                        <br />
                        <h2>Container Details</h2>
                        <br />
                        <Tabs>
                            {
                                pod.containers.map(container => (
                                    <Tabs.Tab label={container.name}>
                                        <ContainerDetail container={container} />
                                    </Tabs.Tab>
                                ))
                            }
                        </Tabs>
                    </div>
                )
            }
        </Fragment>
    );
};

export default Pod;
