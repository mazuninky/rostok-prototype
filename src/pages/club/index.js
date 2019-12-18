import React from 'react';
import antd from 'antd';
import "./index.css";
import {findClubById} from "../../data";
import {
    useParams
} from "react-router-dom";

const {Typography, Calendar} = antd;
const {Title} = Typography;

// props.name - назание клуба
// props.events - список событий
// props.events.name - название события
// props.events.data - дата события
function Club(props) {
    let {id} = useParams();
    const club = findClubById(id);
    return (
        <div className="frame">
            <Title className="header">{club.name}</Title>
            <div className="image">
                <img src={club.img}
                     className="picture"/>
            </div>
            <Calendar className="calendar"/>
        </div>
    );
}

export default Club;
