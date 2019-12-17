import React from 'react';
import antd from 'antd';

const { Button } = antd;
const { Typography } = antd;
const { notification } = antd;


const { Title } = Typography;
// props.name - назание события
// props.description - описание события
// props.data - дата события
// props.isSubscribed - пользователь записан на событие
function Event(props) {
    function handleClick(e) {
        e.preventDefault();
        //todo implement
        notification.open({
            message: 'Вы успешно записались на занятие',
            description:
                'Бла бла',
        });
    }
    function goBack(e) {
        e.preventDefault();
        //todo implement

    }
    return (
        <div>
            <Button onClick={goBack} type='danger' icon="close" style={{align: 'left'}}/>
            <Title style={{align: 'left'}}>{props.name}</Title>
            <Title style={{align: 'left'}}>{props.description}</Title>
            <Button onClick={handleClick} disabled={props.isSubscribed} style={{align: 'left'}} type="primary">Записаться на занятие</Button>
        </div>
    );
}

export default Event;
