import UserLayout from './index'
import router from 'next/router'
import { Form, Input, Button, Icon } from 'antd'

function UserAdd(props) {
  async function handleSubmit (event) {
    // 添加用户的操作
    // let values = props.form.getFieldsValue()
    // let res = await axios.post('/api/register', values)
  }
  return (
    <UserLayout>
      <div>
        hello
      </div>
    </UserLayout>
  )
}

export default UserAdd
