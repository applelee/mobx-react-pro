const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const router = require('koa-router')()

// app.use(logger());
app.use(require('koa-static')(__dirname + '/dist'));

// views
app.use(views(__dirname + '/dist', {
  extension: 'html'
}));

// router config
router.get('/api/test', async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin','*')
    ctx.body = {
        title: '优小招',
        description:'测试接口',
    }
})

// router config
router.get('*', async (ctx, next) => {
    await ctx.render('index', {
        title: '优小招'
    })
})

// front end routes poxy
app.use(router.routes());

// start server
app.listen(3300,() => {
    console.log('open ','127.0.0.1:3300')
})