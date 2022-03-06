import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function ContainerDetail({ container }) {
    return (
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <h6>Image: </h6>{container.image}
            </ListGroup.Item>
            {
                container.status.type === 'RUNNING' ? (
                    <ListGroup.Item variant='success'>
                        <h6>Status: </h6>
                        <Badge bg='success' text='light'>{container.status.type}</Badge>
                    </ListGroup.Item>
                ) : (
                    container.status.type === 'WAITING' ? (
                        <ListGroup.Item variant='warning'>
                            <h6>Status: </h6>
                            <Badge bg='warning' text='light'>{container.status.type}</Badge>
                        </ListGroup.Item>
                    ) : (
                        <ListGroup.Item variant='secondary'>
                            <h6>Status: </h6>
                            <Badge bg='secondary' text='light'>{container.status.type}</Badge>
                        </ListGroup.Item>
                    )
                )
            }
            {
                container.status.reason !== null ? (
                    <ListGroup.Item>
                        <h6>Reason: </h6>{container.status.reason}
                    </ListGroup.Item>
                ) : ''
            }
            {
                container.status.restartCount < 5 ? (
                    <ListGroup.Item variant='success'>
                        <h6>Restart Count: </h6>{container.status.restartCount}
                    </ListGroup.Item>
                ) : (
                    container.status.restartCount < 20 ? (
                        <ListGroup.Item variant='warning'>
                            <h6>Restart Count: </h6>{container.status.restartCount}
                        </ListGroup.Item>
                    ) : (
                        <ListGroup.Item variant='danger'>
                            <h6>Restart Count: </h6>{container.status.restartCount}
                        </ListGroup.Item>
                    )
                )
            }
            <ListGroup.Item>
                <h6>Started At: </h6>{container.status.startedAt}
            </ListGroup.Item>
            {
                container.status.finishedAt !== null ? (
                    <ListGroup.Item>
                        <h6>Finished At: </h6>{container.status.finishedAt}
                    </ListGroup.Item>
                ) : ''
            }
        </ListGroup>
    );
};

export default ContainerDetail;
