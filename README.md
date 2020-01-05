pages是路由根目录
约定式路由
跳转路由有两种方式
```js
import Link from 'next/link'
<Link href="/user">
  <a href="">用户列表</a>
</Link>

import router from 'next/router'
<Button onClick={() => router.push('/user')}>
  切换/user
</Button>
```
怎么使用styled-jsx
