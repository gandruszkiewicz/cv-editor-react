import React, { Component } from 'react';
import { EditOutlined, UserOutlined, DashOutlined, DownloadOutlined,DeleteOutlined} from '@ant-design/icons';
import cvicon from '../../../assets/cv_icon.svg'
import CvIconComponent from '../../cvIcon.component';
import { Card, Input, Button, Col, Row, Menu, Dropdown, Tooltip } from 'antd';
import {NavLink} from 'react-router-dom'


export class ReadUpdateResume extends Component {

  constructor(props){
    super(props);
    this.focusOnDocumentNameInput = 
      this.focusOnDocumentNameInput.bind(this);
  }
  handleButtonClick(e){

    console.log(e)
  }

  handleDocumentNameUpdate(e){
    console.log('Document name updated!')
  }

  focusOnDocumentNameInput(){
    this.documentName.focus();
  }

  render(){
    const menu = (
      <Menu>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Edit
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />} onClick ={this.focusOnDocumentNameInput}>
          Change name
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          Download
        </Menu.Item>
      </Menu>
    );
    
    
    return (
      <div style = {{marginTop: '5%'}}>
        <Card
            hoverable
            cover = {<img src= {cvicon} />}
            style = {Object.assign({width: 240})}
            actions={[
              <NavLink to="/edit-resume">
                <EditOutlined key="edit" style ={Object.assign({float:'left'}, {marginLeft: '20%'}, {fontSize: 'larger'})}/>
                <DeleteOutlined key="delete" style ={Object.assign({float:'right'}, {marginRight: '20%'}, {fontSize: 'larger'})}/>
                <DownloadOutlined key="download" style ={Object.assign({float:'right'}, {marginRight: '20%'}, {fontSize: 'larger'})}/>
              </NavLink>
            ]}
          >
            <Tooltip title="Press enter to save" className ="primary">
              <Input onPressEnter={this.handleDocumentNameUpdate}
                ref = {(input) => {this.documentName = input}} 
                defaultValue = {this.props.resume.documentName}
                style = {Object.assign({border:'none'},{width: '70%'},{fontWeight: 'bold'})}/>  
            </Tooltip> 
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={this.handleButtonClick}>
                  <DashOutlined style = 
                    {Object.assign({transform: 'rotate(90deg)'}, {float: 'right'})}
                    className = 'menu-icon' />
              </a>
            </Dropdown>

        </Card>
      </div>
    );
  }
}
export default ReadUpdateResume;