import React from 'react';

import {Card} from 'antd';

import "./club-card.css";

//props.item.name - Имя клуба
function ClubCard(props) {
    return (
        <div className={"club-card"}>
           <p>{props.item.name}</p>
        </div>
    );
}

export default ClubCard;
