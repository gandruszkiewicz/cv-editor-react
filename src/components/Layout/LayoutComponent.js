import React,{Component} from 'react';
import {
  Layout,
  Menu,
  Dropdown,
  Button
 } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  LogoutOutlined
} from '@ant-design/icons';

import { connect } from 'react-redux';
import { auhenticationActions } from '../../actions/authentication.action'

const { Header, Content, Footer, Sider } = Layout;

class LayoutComponent extends Component {
    constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }
    state = {
        collapsed: false
      };
    
      onCollapse = (collapsed) => {
        this.setState({ collapsed });
      };

      handleClick(){
        const { dispatch } = this.props;
        dispatch(auhenticationActions.logout());
      }



      render() {
        const menu = (
          <Menu>
            <Menu.Item key="1" onClick={this.handleClick} icon={<LogoutOutlined />}>
              Wyloguj się
            </Menu.Item>
          </Menu>
        );
        const userDropDownBtnTxt = 
          this.props.state
          .authentication.user.userName.slice(0,1);
        
        return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Add Resume
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Your resumes
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0, alignSelf: 'flex-end', marginRight: '3%' }}>
            <Dropdown overlay={menu}>
              <Button type = 'primary' shape='circle'>
               {userDropDownBtnTxt}
              </Button>
          </Dropdown>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                Here goes choosed components
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
          </Layout>
        </Layout>
      );
    }
}

const mapStateToProps = (state) =>{
  return {
    state: state
  }
}

export default connect(mapStateToProps)(LayoutComponent);