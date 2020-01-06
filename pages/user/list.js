import { List } from 'antd'
import UserLayout from './index'
import Link from 'next/link'
import axios from '../../utils/axios'

function UserList(props) {
  return (
    <UserLayout>
      <div>
        <List
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={props.list}
          renderItem={
            item => <List.Item>
              <Link href={{ pathname: '/user/detail', query: { id: item.id } }}>
                <a href="">
                  {item.username}
                </a>
              </Link>
            </List.Item>}
        />
      </div>
    </UserLayout>
  )
}
UserList.getInitialProps = async (ctx) => {
  // let list = [{ username: '张三', id: 1 }]
  // 返回值将会成为当前组件的属性对象
  let res = await axios.get('/user/list')
  return { list: res.data.data }
}

export default UserList
