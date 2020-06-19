import cvIcon from '../assets/cv_icon.svg';
import React from 'react';

const CvIconComponent = () => {

    return(
        <img src = {cvIcon} style = {Object.assign({height: '60%'},{width: '100%'})}/>
    )
}

export default CvIconComponent;