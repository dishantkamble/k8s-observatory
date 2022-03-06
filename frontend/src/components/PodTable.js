import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import moment from 'moment';
import Table from 'react-bootstrap/Table';

function PodTable({ data, filterByStatus, ignoreNamespace }) {
    const refresh = () => {
        setTimeout(() => {
            window.location.reload();
        }, 100);
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Created</th>
                    {
                        ignoreNamespace === undefined ? <th>Namespace </th> : ''
                    }
                    <th>Status&nbsp;(Health)</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.filter(pod => filterByStatus !== undefined ? pod.status === filterByStatus : true)
                        .map(filteredPod => (
                            <tr key={filteredPod.name}>
                                <td>{filteredPod.name}</td>
                                <td>{moment(filteredPod.createdAt * 1000).fromNow()}</td>
                                {
                                    ignoreNamespace === undefined ? <td><Link onClick={refresh} to={`/pods/namespace/${filteredPod.namespace}`}>{filteredPod.namespace}</Link></td> : ''
                                }
                                <td>
                                    <h5>
                                        {
                                            filteredPod.status === 'RUNNING' ? <Badge bg='success' text='light'>{filteredPod.status}</Badge>
                                                : (
                                                    filteredPod.status === 'SUCCEEDED' ? <Badge bg='secondary' text='light'>{filteredPod.status}</Badge>
                                                        : (
                                                            filteredPod.status === 'PENDING' || filteredPod.status === 'UNKNOWN' ? <Badge bg='warning' text='dark'>{filteredPod.status}</Badge>
                                                                : <Badge bg='danger' text='dark'>{filteredPod.status}</Badge>
                                                        )
                                                )
                                        }
                                    </h5>
                                </td>
                                <td>
                                    <Button variant='primary' href={`/pods/${filteredPod.name}/namespace/${filteredPod.namespace}`} size='sm'>Details</Button>
                                    {' '}
                                    {
                                        filteredPod.status !== 'SUCCEEDED' ? <Button variant='outlined-secondary' href={`/pods/${filteredPod.name}/namespace/${filteredPod.namespace}`} size='sm'>Subscribe</Button> : ''
                                    }
                                </td>
                            </tr>
                        ))
                }
            </tbody>
        </Table>
    );
};

export default PodTable;
