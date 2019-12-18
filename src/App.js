import React from 'react';
import {Row, Col, Affix} from 'antd';
import './App.css';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";

import Clubs from './pages/clubs/index'
import Club from './pages/club/index'
import Event from './pages/event/index'

import data from './data';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mapState: { center: [59.93863, 30.31413], zoom: 12 }};
        this.handleMapClick = this.handleMapClick.bind(this);
    }

     handleMapClick(club) {
        this.props.history.push("/club/" + club.id);
        this.setState({mapState: {center: [club.lat, club.lon], zoom: 16}});
    }

    render() {
        const marks = data.clubs.map(it => {
            return (
                <Placemark onClick={() => this.handleMapClick(it)} key={it.id} geometry={[it.lat, it.lon]}
                           properties={{hintContent: it.name}}/>
            );
        });


        return (
            <div className="App">
                <Row className="root-row">
                    <Col span={12}>
                        <YMaps>
                            <Map className="map" state={this.state.mapState} defaultState={{center: [59.93863, 30.31413], zoom: 12}}
                                 defaultOptions={{autoFitToViewport: "always"}}>
                                {marks}
                            </Map>
                        </YMaps>
                    </Col>
                    <Col span={12}>
                        <Switch>
                            <Route exact path="/">
                                <Clubs handler={this.handleMapClick}/>
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
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(App);
