import React from 'react';
import {notification } from 'antd';

export const AlertNotificationComponent = (props) => {

if(!props.alertMessage){
    return null;
}

var messages = props.alertMessage.message.map(message => {
  return React.createElement('li',null,message.toString())
})

const handleDestroy = () =>{
  props.alertMessage = null;
}

notification.open({
    message: React.createElement('ul', {className:'errorList'}, messages),
    description:
      '',
    duration: 20,
    className: props.alertMessage.type === "error" 
      ? 'alert-error-notificaton' 
      : 'alert-success-notificaton',
    onClose: {handleDestroy}
  });

  return(
    null
  )
}

export default AlertNotificationComponent;