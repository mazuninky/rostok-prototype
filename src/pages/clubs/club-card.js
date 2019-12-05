import React from 'react';

import {Card} from 'antd';

//props.item.name - Имя клуба
function ClubCard(props) {
    return (
        <Card title={props.item.name}>Card content</Card>
    );
}

export default ClubCard;
