import React,{Component} from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { MenuOutlined, LogoutOutlined } from '@ant-design/icons';
import { authenticationActions } from '../../actions/authentication/authentication.action';
import { connect } from 'react-redux';

const { SubMenu } = Menu;

class MenuLayoutComponent extends Component {
    constructor(props){
        super(props)
        this.handleClickLogout = this.handleClickLogout.bind(this)
        }

  handleClick = e => {
    console.log('click ', e);
  };

  handleMenuClick(e){
      console.log(e);
  }

  handleClickLogout(){
    const { dispatch } = this.props;
    dispatch(authenticationActions.logout());
  }

  render() {

    return (
        <>
            <Menu onClick={this.handleClick} mode="horizontal">
                <SubMenu onHover = {this.handleMenuClick}  icon={<MenuOutlined />} title="Menu" style = {{'margin-left': '1%'}}>
                    <Menu.Item key="setting:1">Add Resume</Menu.Item>
                    <Menu.Item key="setting:2">Your resumes</Menu.Item>
                </SubMenu>
                <Menu.Item 
                    key="1" 
                    onClick={this.handleClickLogout} 
                    icon={<LogoutOutlined />} 
                    style = {{'float': 'right', 'marginRight': '1%'}}
                    >
                    Logout
                </Menu.Item>
            </Menu>
        </>
    );
  }
}

const mapStateToProps = (state) =>{
    return {
      state: state
    }
  }
  
export default connect(mapStateToProps)(MenuLayoutComponent);