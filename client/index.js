let koa = require('koa')
let router = require('koa-router')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev: true})
// handler是一个处理函数，我们可以把请求和响应传递给他
const handler = app.getRequestHandler()
app.prepare().then(() => {
  const server = new koa()
  let router = new router()
  // 定义路由
  server.use(router.routes())
  server.use(async (ctx, next) => {
    await handler(ctx.req, ctx.res)
    ctx.response = false
  })
  server.listen(3000, () => {
    console.log('port in 3000')
  })
})
