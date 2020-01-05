import { List } from 'antd'
import UserLayout from './index'
import Link from 'next/link'

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
          renderItem={item => <List.Item>{item.username}</List.Item>}
        />
      </div>
    </UserLayout>
  )
}
UserList.getInitialProps = async (ctx) => {
  let list = [{ username: '张三', id: 1 }]
  // 返回值将会成为当前组件的属性对象
  return { list }
}

export default UserList
