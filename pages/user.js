import { Button, Layout } from 'antd'
const { Content } = Layout
import Link from 'next/link'
export default function (props) {
  return (
    <div>
      <div>用户管理</div>
      <Link href="/profile">
        <a href="">跳转到个人中心页面</a>
      </Link>
    </div>
  )
}
