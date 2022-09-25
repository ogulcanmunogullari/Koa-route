const Koa = require("koa")
const koaRouter = require("koa-router")
const app = new Koa()

const router = new koaRouter()

const menu = `
  <a href="/">Home</a>

  <a href="/about">About</a>

  <a href="/contact">Contact</a>
`

router.get("index", "/", (ctx) => {
  ctx.body = "<h1>Ana Sayfa</h1> " + menu
})

router.get("about", "/about", (ctx) => {
  ctx.body = "<h1>Hakkımızda</h1>" + menu
})

router.get("contact", "/contact", (ctx) => {
  ctx.body = "<h1>Iletişim</h1>" + menu
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log(`Server Çalışıyor`)
})
