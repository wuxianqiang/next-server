function UserInfo (props) {
  // props.user
  return (
    <div>
      <p>用户名：{props.user.username}</p>
      <p>密码：{props.user.password}</p>
      <p>创建时间：{props.user.createTime}</p>
    </div>
  )
}
export default UserInfo
