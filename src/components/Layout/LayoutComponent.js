import React,{Component} from 'react';
import {
  Layout
 } from 'antd';

import history from '../../helpers/history';
import {Route, Router} from 'react-router-dom';
import AddResumeComponent from '../Resume/AddResumeComponent';

import MenuLayoutComponent  from './MenuLayoutComponent';

const { Header, Content, Footer, Sider } = Layout;

const LayoutComponent = (WrappedComponent) => {
    return(props) => {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <MenuLayoutComponent/>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <WrappedComponent {...props}/>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
          </Layout>
        </Layout>
      );
    }
}

export default LayoutComponent;