import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiUrlConstant from '../components/ApiUrlConstant';
import NavigationBar from '../components/NavigationBar';
import PodTable from '../components/PodTable';
import Spinner from 'react-bootstrap/Spinner';
import "@ui5/webcomponents/dist/MessageStrip";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";

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
            <h2>Pods</h2>
            <br />
            <h5>Namespace: </h5><i>{namespace}</i>
            <br />
            {
                loading === false ? (
                    <Spinner animation='border' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </Spinner>
                ) : (
                    <ui5-tabcontainer class='full-width' fixed>
                        <ui5-tab text='All'>
                            <ui5-message-strip design='Information' hide-close-button>Lists all Pods. Irrespective of their statuses. Refer specific Tabs for filtered list based on Pod status.</ui5-message-strip>
                            <PodTable data={pods} />
                        </ui5-tab>
                        <ui5-tab text='Running' design='Positive'>
                            <ui5-message-strip design='Positive' hide-close-button>Below Pods are running healthy.</ui5-message-strip>
                            <PodTable data={pods} filterByStatus='RUNNING' />
                        </ui5-tab>
                        <ui5-tab text='Succeeded' design='Positive'>
                            <ui5-message-strip design='Positive' hide-close-button>Below Pods have completed successfully.</ui5-message-strip>
                            <PodTable data={pods} filterByStatus='SUCCEEDED' />
                        </ui5-tab>
                        <ui5-tab text='Pending' design='Critical'>
                            <ui5-message-strip design='Warning' hide-close-button>Below Pods have not started as expected. Either wait for sometime or refer logs for detailed analysis.</ui5-message-strip>
                            <PodTable data={pods} filterByStatus='PENDING' />
                        </ui5-tab>
                        <ui5-tab text='Failed' design='Negative'>
                            <ui5-message-strip design='Negative' hide-close-button>Below Pods have failed! Refer logs for detailed analysis.</ui5-message-strip>
                            <PodTable data={pods} filterByStatus='FAILED' />
                        </ui5-tab>
                    </ui5-tabcontainer>
                )
            }
        </Fragment>
    );
};

export default PodsByNamespace;
