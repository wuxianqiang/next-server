import App from 'next/app'
import { Layout, Menu, Icon } from 'antd'
import Link from 'next/link'
const { Header, Footer, Content } = Layout
import 'antd/dist/antd.css'
import './base.css'
import {withRouter} from 'next/router'

class LayoutApp extends App {
  // static async getInitialProps ({Component, ctx}) {
  //   let pageProps = {}
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }
  //   return {pageProps}
  // }
  render() {
    let {Component, pageProps} = this.props
    let {pathname} = this.props.router
    return (
      <>
        <style jsx>{`
          a {
            display: inline-block!important;
          }
        `}</style>
        <Layout style={{height: '100%'}}>
          <Header>
            <img
              src="/images/logo.png"
              alt="logo"
              width="100" />
            <Menu
              theme="dark"
              mode="horizontal"
              style={{lineHeight: '64px', display: 'inline-block'}}
              selectedKeys={[pathname]}
              defaultSelectedKeys={['/']}>
                <Menu.Item key="/">
                  <Icon type="home">
                  </Icon>
                  <Link href="/">
                    <a href="">首页</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/user">
                  <Icon type="user">
                  </Icon>
                  <Link href="/user">
                    <a href="">用户列表</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/profile">
                  <Icon type="profile">
                  </Icon>
                  <Link href="/profile">
                    <a href="">用户中心</a>
                  </Link>
                </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer style={{textAlign: 'center'}}>
            @copyright Next.js
          </Footer>
        </Layout>
      </>
    )
  }
}

export default withRouter(LayoutApp)
