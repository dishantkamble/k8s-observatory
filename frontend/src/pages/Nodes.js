import React, { Fragment, useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import ApiUrlConstant from '../components/ApiUrlConstant';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

const Nodes = () => {
    const [loading, setLoading] = useState(false);
    const [nodes, setNodes] = useState([]);

    const getApi = () => {
        let api = ApiUrlConstant + '/k8s-observatory/api/nodes/';

        fetch(api).then(response => {
            return response.json();
        }).then(data => {
            setLoading(true);
            setNodes(data);
        });
    };

    useEffect(() => {
        getApi();
    }, []);

    return (
        <Fragment>
            <NavigationBar />
            <h3>Nodes</h3>
            {
                loading === false ? (
                    <Spinner animation='border' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </Spinner>
                ) : (
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status&nbsp;(Health)</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                nodes.map(node => (
                                    <tr key={node.name}>
                                        <td>{node.name}</td>
                                        <td>
                                            {
                                                node.status === 'READY' ? (
                                                    <Badge bg='success' text='light'>{node.status}</Badge>
                                                ) : (
                                                    node.status === 'UNHEALHTY' ? (
                                                        <Badge bg='danger' text='light'>{node.status}</Badge>
                                                    ) : (
                                                        <Badge bg='warning' text='dark'>{node.status}</Badge>
                                                    )
                                                )
                                            }
                                        </td>
                                        <td>
                                            <Button href={`/nodes/${node.name}`} variant='primary' size='sm'>Details</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                )
            }
        </Fragment>
    );
};

export default Nodes;
