import { withRouter } from 'next/router'
import { Layout, Menu, Icon } from 'antd'
import Link from 'next/link'
const { Content } = Layout
function UserLayout(props) {
  let { pathname } = props.router
  return (
    <>
      <Icon type="user">
      </Icon>
      <Link href="/user/add">
        <a href="">添加用户</a>
      </Link>
      <Icon type="home">
      </Icon>
      <Link href="/user/list">
        <a href="">用户列表</a>
      </Link>
      <Content>
        {props.children}
      </Content>
    </>
  )
}

export default withRouter(UserLayout)
