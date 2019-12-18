import React from 'react';
import {Typography, Button, notification, Layout} from 'antd';
import {findEventById, subscribeToEventById} from "../../data";

const {Title, Paragraph} = Typography;

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
            description: event.name,
        });
    }

    goBack(e) {
        e.preventDefault();
        this.props.history.goBack()
    }

    render() {
        return (
            <div style={{padding: "20px"}}>
                <Button className={"mb-4"} onClick={this.goBack} type='danger' icon="close"/>
                <Typography className={"mb-4"}>
                    <Title>{this.state.event.name}</Title>
                    <Paragraph>{this.state.event.description}</Paragraph>
                </Typography>
                <Button onClick={this.handleClick} disabled={this.state.event.isSubscribed} type="primary">Записаться на
                    занятие</Button>
            </div>
        );
    }
}

export default Event;
