import React from 'react';
import antd from 'antd';
import "./index.css";
import {findClubById} from "../../data";
import {
    useParams,
    withRouter
} from "react-router-dom";

const {Typography, Calendar, Badge} = antd;
const {Title} = Typography;

function Club(props) {
    let {id} = useParams();
    const club = findClubById(id);


    function onEventClick(event) {
        props.history.push("/info/club/"+ id + "/event/" + event.id);
    }

    function dateCellRender(value) {
        const listData = club.events.filter(it => {
            return it.day == value.date();
        });
        return (
            <ul className="events">
                {listData.map(event => (
                    <li onClick={it => onEventClick(event)} key={event.name}>
                        <Badge status='success' text={event.name} />
                    </li>
                ))}
            </ul>
        );
    }

    function getMonthData(value) {
        // if (value.month() === 8) {
        //     return 1394;
        // }
    }

    function monthCellRender(value) {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }

    return (
        <div className="frame">
            <Title className="header">{club.name}</Title>
            <div className="image">
                <img src={club.img} className="picture"/>
            </div>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} className="calendar"/>
        </div>
    );
}

export default withRouter(Club);
