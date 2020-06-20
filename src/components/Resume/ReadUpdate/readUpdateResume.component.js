import React, { Component } from 'react';
import { EditOutlined} from '@ant-design/icons';
import cvicon from '../../../assets/cv_icon.svg'
import CvIconComponent from '../../cvIcon.component';
import { Card, Input, Button, Col, Row } from 'antd';
import {NavLink} from 'react-router-dom'


export class ReadUpdateResume extends Component {

  handleButtonClick(){
    console.log('Clicked')
  }

  handleDocumentNameUpdate(){
    console.log('Document name updated!')
  }

  render(){
    return (
      <div>
        <Input onPressEnter={this.handleDocumentNameUpdate} defaultValue = "lorem" style = {Object.assign({border:'none'}, {marginTop: '5%'})}/>            
        <Card
            hoverable
            cover = {<img src= {cvicon} />}
            style = {Object.assign({width: 240})}
            actions={[
              <NavLink to="/edit-resume">
                <EditOutlined key="edit" />
              </NavLink>
            ]}
            bodyStyle ={{display: 'none'}}
          >
        </Card>
      </div>
    );
  }
}
export default ReadUpdateResume;