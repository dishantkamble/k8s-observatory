import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Node from './pages/Node';
import Nodes from './pages/Nodes';
import Pod from './pages/Pod';
import Pods from './pages/Pods';
import PodsByNamespace from './pages/PodsByNamespace';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/nodes' element={<Nodes />} />
                <Route exact path='/nodes/:nodeName' element={<Node />} />
                <Route exact path='/pods' element={<Pods />} />
                <Route exact path='/pods/namespace/:namespace' element={<PodsByNamespace />} />
                <Route exact path='/pods/:podName/namespace/:namespace' element={<Pod />} />
            </Routes>
        </Router>
    );
}

export default App;
