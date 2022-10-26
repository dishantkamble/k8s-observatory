import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiUrlConstant from '../components/ApiUrlConstant';
import NavigationBar from '../components/NavigationBar';
import PodTable from '../components/PodTable';
import Spinner from 'react-bootstrap/Spinner';
import { Divider } from '@mantine/core';
import { Notification } from '@mantine/core';
import { Tabs } from '@mantine/core';

const PodsByNamespace = () => {
    const { namespace } = useParams();
    const [loading, setLoading] = useState(false);
    const [pods, setPods] = useState([]);

    const getApi = () => {
        let api = ApiUrlConstant + '/k8s-observatory/api/pods/namespace/' + namespace;

        fetch(api).then(response => {
            return response.json();
        }).then(data => {
            setLoading(true);
            setPods(data);
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
            <h3>Pods</h3>
            <Divider my="sm" />
            <h6>Namespace: </h6> <i>{namespace}</i>
            <Divider my="sm" variant="dashed" />
            <br />
            {
                loading === false ? (
                    <Spinner animation='border' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </Spinner>
                ) : (
                    <Tabs>
                        <Tabs.Tab label='All' color='dark'>
                            <Notification title="Lists all Pods. Irrespective of their statuses. Refer specific Tabs for filtered list based on Pod status." color='dark' disallowClose />
                            <PodTable data={pods} ignoreNamespace />
                        </Tabs.Tab>
                        <Tabs.Tab label='Running'>
                            <Notification title="Lists all Pods which are running healthy." disallowClose />
                            <PodTable data={pods} filterByStatus='RUNNING' ignoreNamespace />
                        </Tabs.Tab>
                        <Tabs.Tab label='Succeeded' color='green'>
                            <Notification title="Lists all Pods which have completed successfully." color='green' disallowClose />
                            <PodTable data={pods} filterByStatus='SUCCEEDED' ignoreNamespace />
                        </Tabs.Tab>
                        <Tabs.Tab label='Pending' color='yellow'>
                            <Notification title="Lists all Pods which have not started as expected. Either wait for sometime or refer logs for detailed analysis." color='yellow' disallowClose />
                            <PodTable data={pods} filterByStatus='PENDING' ignoreNamespace />
                        </Tabs.Tab>
                        <Tabs.Tab label='Failed' color='red'>
                            <Notification title="Lists all Pods which have failed! Refer logs for detailed analysis." color='red' disallowClose />
                            <PodTable data={pods} filterByStatus='FAILED' ignoreNamespace />
                        </Tabs.Tab>
                    </Tabs>
                )
            }
        </Fragment>
    );
};

export default PodsByNamespace;
