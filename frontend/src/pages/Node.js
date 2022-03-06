import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import ApiUrlConstant from '../components/ApiUrlConstant';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';

const Node = () => {
    const { nodeName } = useParams();
    const [loading, setLoading] = useState(false);
    const [node, setNode] = useState();

    const getApi = () => {
        let api = ApiUrlConstant + '/k8s-observatory/api/nodes/' + nodeName;

        fetch(api).then(response => {
            return response.json();
        }).then(data => {
            setLoading(true);
            setNode(data);
        });
    };

    useEffect(() => {
        getApi();
    }, []);

    return (
        <Fragment>
            <main>
                <NavigationBar />
            </main>
            <h2>Node Details</h2>
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
                                <h5>Name: </h5>{node.name}
                            </ListGroup.Item>
                            {
                                node.status === 'READY' ? (
                                    <ListGroup.Item variant='success'>
                                        <h5>Status: <Badge bg='success' text='light'>{node.status}</Badge></h5>
                                    </ListGroup.Item>
                                ) : (
                                    node.status === 'UNHEALHTY' ? (
                                        <ListGroup.Item variant='danger'>
                                            <h5>Status: <Badge bg='danger' text='light'>{node.status}</Badge></h5>
                                        </ListGroup.Item>
                                    ) : (
                                        <ListGroup.Item variant='secondary'>
                                            <h5>Status: <Badge bg='secondary' text='light'>{node.status}</Badge></h5>
                                        </ListGroup.Item>
                                    )
                                )
                            }
                            <ListGroup.Item>
                                <h5>Operating System: </h5>{node.osImage}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Architecture: </h5>{node.architecture}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Kernel: </h5>{node.kernelVersion}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Kube Proxy: </h5>{node.kubeProxyVersion}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Kubelet: </h5>{node.kubeletVersion}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Container Runtime: </h5>{node.containerRuntimeVersion}
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                )
            }
        </Fragment>
    );
};

export default Node;
