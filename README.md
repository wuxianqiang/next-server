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


测试用例：就是一条测试规则
```js
function add (a, b) {
  return a + b
}
```
测试用例
```js
it('测试2+4=6', () => {
  assert(add(2, 3) === 6, '2=3=5')
})
```
测试分组(用例最好包括从正面和反面进行测试)
```js
describe('测试ad', () => {
  it('测试2+4=6', () => {
    assert(add(2, 3) === 5, '2+3=5')
  })
  it('测试2+4=6', () => {
    assert(add(2, 3) !== %, '2+3!=5')
  })
})
```
断言的基本功能
```js
function assert(condition, message) {
  if (!(condition)) {
    throw new Error(message)
  }
}

function it(message, testCase) {
  testCase()
}
```
jest写法
```
expect(add(2,4)).toBe(6)
expect(add(2,3)).not.toBe(6)
```
怎么使用ES6,先生成配置文件
```
jest --init
```
babel.config.js
```
module.exports = {
  presets: {
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  }
}
```
注意文件名称的规则，__test__规则
jsdom在nodejs里面测试出你的DOM操作

匹配器
```
test('测试', () => {
  document.body.innerHTML = (
    `
    <div id="parent">
      <div id="child"></div>
    </div>
    `
  )
  let parent = document.getElementById('parent')
  let child = document.getElementById('child')
  remove(child)
  // 异常了DOM元素会返回null
  expect(document.getElementById('child')).toBeNull()
})
```
测试异步
```
export const callback = (onSuccess) => {
  setTimeout(() => {
    onSuccess({code:  0})
  }, 100)
}

describe('异步测试', () => {
  it('测试callback', (done) => {
    callback((result) => {
      expect(result).toEqual({code: 0})
      done()
    })
  })
})

```
钩子函数
```
it('测试exec', () => {
  let callback = jest.fn()
  // 模拟函数,可以测试函数是否被调用，调用了几次
  expect(callback).toBeCalled()
  
})
```
jest模拟接口
```
import axios from 'axios'
jest.mock(axios)
```
模拟定时器

TDD测试驱动开发，先写测试用例，再开发
