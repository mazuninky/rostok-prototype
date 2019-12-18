import React from 'react';
import antd from 'antd';
import {
    useParams
} from "react-router-dom";
import {findEventById, subscribeToEventById} from "../../data";

const { Button } = antd;

const { Typography } = antd;
const { notification } = antd;


const { Title } = Typography;

class Event extends React.Component {
    constructor(props) {
        super(props);
        let {clubId, eventId} = props.match.params;
        this.state = {event: findEventById(clubId, eventId), clubId: clubId, eventId: eventId};
        this.handleClick = this.handleClick.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        subscribeToEventById(this.state.clubId, this.state.eventId);
        let event = this.state.event;
        event.isSubscribed = true;
        this.setState({event});
        notification.open({
            message: 'Вы успешно записались на занятие',
            description:
                'Бла бла',
        });
    }

    goBack(e) {
        e.preventDefault();
        //todo implement

    }
    render() {
        return (
            <div style={{float: 'left', padding:20}}>
                <Button onClick={this.goBack} type='danger' icon="close" />
                <Title >{this.state.event.name}</Title>
                <Title level={2}>{this.state.event.description}</Title>
                <Button onClick={this.handleClick} disabled={this.state.event.isSubscribed} type="primary">Записаться на занятие</Button>
            </div>
        );
    }
}

export default Event;
