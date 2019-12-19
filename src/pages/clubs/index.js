import React from 'react';

import {Card, Row, Col, Typography} from 'antd';

import {
    withRouter
} from 'react-router-dom';
import {findAll} from "../../data";

const {Meta} = Card;
const {Title} = Typography;

//props.clubs - Список клубов
function Clubs(props) {
    const data = findAll();
    const clubs = data.map(it => {
        return (<Card
            onClick={() => props.handler(it)}
            style={{cursor: 'pointer'}}

            cover={
                <img
                    style={{height: "150px"}}
                    alt="example"
                    src={it.img}
                />
            }
        >
            <Meta
                title={it.name}
            />
        </Card>)
    });
    const rows = [];
    let i = 0;
    if (clubs.length !== 0) {
        while (i < clubs.length) {
            if (i + 1 < clubs.length) {
                rows.push((
                    <Row gutter={[16, 16]}
                         key={data[i].id}
                    >
                        <Col span={12}>{clubs[i]}</Col>
                        <Col span={12}>{clubs[i + 1]}</Col>
                    </Row>
                ));
                i += 2;
            } else {
                rows.push((<Row gutter={[16, 16]}
                                key={data[i].id}>
                    <Col span={12}>{clubs[i]}</Col>
                </Row>));
                i++;
            }
        }
    }
    return (
        <div>
            <Title style={{marginTop: "16px", textAlign: "center"}}>Клубы</Title>
            <div style={{padding: "16px 8px 16px 16px"}}>
                {rows}
            </div>
        </div>
    );
}

export default withRouter(Clubs);
