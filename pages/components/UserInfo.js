import { useState } from "react"
import {Button} from 'antd'

function UserInfo (props) {
  // props.user
  let [created, setCreated] = useState(props.user.createTime)
  async function changeFormat () {
    let moment = await import('moment')
    setCreated(moment(created).format('YYYY-MM-DD'))
  }
  return (
    <div>
      <p>用户名：{props.user.username}</p>
      <p>密码：{props.user.password}</p>
      <p>创建时间：{created}</p>
      <Button onClick={changeFormat}>转换时间</Button>
    </div>
  )
}
export default UserInfo
