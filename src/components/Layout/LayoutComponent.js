import React,{Component} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

class LayoutComponent extends Component {
    state = {
        collapsed: false,
      };
    
      onCollapse = (collapsed) => {
        this.setState({ collapsed });
      };

      render() {
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
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Path</Breadcrumb.Item>
                <Breadcrumb.Item>Location</Breadcrumb.Item>
              </Breadcrumb>
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