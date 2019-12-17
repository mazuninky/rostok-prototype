import React from 'react';
import antd from 'antd';
import "./index.css";
const { Typography, Calendar } = antd;
const { Title } = Typography;

// props.name - назание клуба
// props.events - список событий
// props.events.name - название события
// props.events.data - дата события
function Club(props) {
    return (
        <div className="frame">
            <Title className="header">{props.name}</Title>
            <div className="image">
                <img src={"https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png"}
                     className="picture"/>
            </div>
            <Calendar className="calendar"/>
        </div>
    );
}

export default Club;
