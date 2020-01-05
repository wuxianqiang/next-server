import { Button, Layout } from 'antd'
import router from 'next/router'
const { Content } = Layout
export default function (props) {
  return (
    <Content>
      <div>Home</div>
      <Button onClick={() => router.push('/user')}>
        切换/user
      </Button>
    </Content>
  )
}
