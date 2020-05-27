import React from 'react';
import {notification } from 'antd';

export const AlertNotification = (props) => {

if(!props.errorMessage){
    return null;
}

var errorMessages = props.errorMessage.map(message => {
  return React.createElement('li',null,message.toString())
})

notification.open({
    message: React.createElement('ul', {className:'errorList'}, errorMessages),
    description:
      '',
    duration: 20,
    className: 'alert-notificaton'
  });

  return(
    null
  )
}

export default AlertNotification;