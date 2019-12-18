import React from 'react';

import {Card, Row, Col} from 'antd';

import {
    withRouter
} from 'react-router-dom';
import {findAll, findClubById} from "../../data";

const {Meta} = Card;

//props.clubs - Список клубов
function Clubs(props) {
    function handleClick(club) {
        props.history.push('/club/' + club.id)
    }
    const data = findAll();
    const clubs = data.map(it => {
        return (<Card
            onClick={() => handleClick(it)}
            style={{cursor: 'pointer'}}

            cover={
                <img
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
            <h1 style={{marginTop: "16px"}}>Клубы</h1>
            <div style={{padding: "16px 8px 16px 16px"}}>
                {rows}
            </div>
        </div>
    );
}

export default withRouter(Clubs);
