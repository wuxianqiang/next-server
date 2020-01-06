import UserLayout from './index'
import router, { withRouter } from 'next/router'
import axios from '../../utils/axios'
import { Form, Input, Button, Icon } from 'antd'
import { useState } from 'react'
// import UserInfo from '../components/UserInfo'
// 组件的懒加载，这个组件是非必须加载的组件
import dynamic from 'next/dynamic'
const UserInfo = dynamic(import('../components/UserInfo'))

function UserDetail(props) {
  let [show, setShow] = useState(false)
  return (
    <UserLayout>
      <div>
        <p>id: {props.router.query.id}</p>
        <Button onClick={() => setShow(!show)}>显示和隐藏</Button>
        {
          show && <UserInfo user={props.user} />
        }
      </div>
    </UserLayout>
  )
}

UserDetail.getInitialProps = async (ctx) => {
  // 根据当前的用户ID去数据库查找用户
  let res = await axios.get(`/api/users/${ctx.query.id}`)
  // 返回user
  return { user: res.data.data }
}

export default withRouter(UserDetail)
