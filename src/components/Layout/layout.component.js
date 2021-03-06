import React from 'react';
import { Layout } from 'antd';

import MenuLayoutComponent  from './menuLayout.component';

const { Header, Content, Footer } = Layout;

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