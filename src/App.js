import React from 'react';
import {Row, Col} from 'antd';
import './App.css';
import {YMaps, Map} from 'react-yandex-maps';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Clubs from './pages/clubs/index'

function App() {
    return (
        <div className="App">
            <Row className="root-row">
                <Col span={12}>
                    <YMaps>
                        <Map className="map" defaultState={{center: [55.75, 37.57], zoom: 9}}
                             defaultOptions={{autoFitToViewport: "always"}}/>
                    </YMaps>
                </Col>
                <Col span={12}>
                    <Router>
                        <Route path="/">
                            <Clubs/>
                        </Route>
                    </Router>
                </Col>
            </Row>
        </div>
    );
}

export default App;
