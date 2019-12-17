import React from 'react';
import {Row, Col} from 'antd';
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
    const marks = data.clubs.map(it => {
        return (
            <Placemark key={it.name} geometry={[it.lat, it.lon]} />
        );
    });

    return (
        <div className="App">
            <Row className="root-row">
                <Col span={12}>
                    <YMaps>
                        <Map className="map" defaultState={{center: [59.93863, 30.31413], zoom: 9}}
                             defaultOptions={{autoFitToViewport: "always"}}>
                            {marks}
                        </Map>
                    </YMaps>
                </Col>
                <Col span={12}>
                    <Router>
                        <Switch>
                            <Route exact path="/" >
                                <Clubs clubs={data.clubs}/>
                            </Route>
                            <Route path="/club">
                                <Club
                                    name={"Test"}
                                    events={[{name: "Йога жепы", data: "17.12.19"}]}
                                />
                            </Route>
                            <Route path="/event">
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
