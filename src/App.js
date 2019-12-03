import React, {Component} from 'react';
import {Button, Row, Col} from 'antd';
import './App.css';
import {YMaps, Map} from 'react-yandex-maps';

class App extends Component {
    render() {
        const style = {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '70%'
        };

        return (
            <div className="App">
                <Row className="root-row">
                    <Col span={12}>
                        <YMaps>
                            <Map className="map" defaultState={{center: [55.75, 37.57], zoom: 9}} defaultOptions={{autoFitToViewport: "always"}} width={"100%"} height={"100%"} />
                        </YMaps>
                    </Col>
                    <Col span={12}>col-12</Col>
                </Row>
                {/*<Button type="primary">Button</Button>*/}
            </div>
        );
    }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
