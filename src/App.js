import React from 'react';
import {Row, Col, Affix} from 'antd';
import './App.css';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Clubs from './pages/clubs/index'
import Club from './pages/club/index'
import Event from './pages/event/index'

import data from './data';

function App() {
    function handleMapClick(club) {
        console.log(club)
    }

    const marks = data.clubs.map(it => {
        return (
            <Placemark onClick={() => handleMapClick(it)} key={it.id} geometry={[it.lat, it.lon]} properties={{hintContent: it.name}} />
        );
    });

    return (
        <div className="App">
            <Row className="root-row">
                <Col span={12}>
                    <YMaps>
                        <Map className="map" defaultState={{center: [59.93863, 30.31413], zoom: 12}}
                             defaultOptions={{autoFitToViewport: "always"}}>
                            {marks}
                        </Map>
                    </YMaps>
                </Col>
                <Col span={12}>
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Clubs/>
                            </Route>
                            <Route path="/club/:id">
                                <Club/>
                            </Route>
                            <Route path="/event/:id">
                                <Event
                                    name={"Test"}
                                    description={"Нискажу"}
                                    data={"6.6.6666"}
                                    isSubscribed={true}
                                />
                            </Route>
                        </Switch>
                    </Router>
                </Col>
            </Row>
        </div>
    );
}

export default App;
