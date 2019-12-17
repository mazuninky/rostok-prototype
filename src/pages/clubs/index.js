import React from 'react';

import {Card, Row, Col} from 'antd';

const {Meta} = Card;

//props.clubs - Список клубов
function Clubs(props) {
    function handleClick(e) {
        e.preventDefault();
        console.log('По ссылке кликнули.');
    }
    const clubs = props.clubs.map(it => {
        return (<Card
            onClick={handleClick}
            style={{cursor: 'pointer'}}

            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
                         key={props.clubs[i].id}
                    >
                        <Col span={12}>{clubs[i]}</Col>
                        <Col span={12}>{clubs[i + 1]}</Col>
                    </Row>
                ));
                i += 2;
            } else {
                rows.push((<Row gutter={[16, 16]}
                                key={props.clubs[i].id}>
                    <Col span={12}>{clubs[i]}</Col>
                </Row>));
                i++;
            }
        }
    }
    return (
        <div>
            <h1>Clubs</h1>
            <div style={{padding: "30px"}}>
                {rows}
            </div>
        </div>
    );
}

export default Clubs;
