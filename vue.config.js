module.exports = {
    baseUrl: './',
    outputDir: 'dist',
    devServer: {
        port: "8081",//代理端口
        open: false,//项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
        proxy: {
            '/admin': {//代理api
                target: "http://172.16.10.26:22222",//服务器api地址
                changeOrigin: true,//是否跨域
                ws: true, // proxy websockets
                pathRewrite: {//重写路径
                    "^/admin": '/'
                }
            }
        }
    }
}

