import React,{Component} from 'react';
import {
  Layout
 } from 'antd';

import MenuLayoutComponent  from './MenuLayoutComponent';

const { Header, Content, Footer, Sider } = Layout;

class LayoutComponent extends Component {
    state = {
        collapsed: false
      };
    
      onCollapse = (collapsed) => {
        this.setState({ collapsed });
      };

      render() {        
        return (
        <Layout style={{ minHeight: '100vh' }}>
          <MenuLayoutComponent/>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
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

export default LayoutComponent;