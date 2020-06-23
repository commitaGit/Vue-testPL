module.exports = {
    devServer: {
        proxy: 
            {
                '/api': {
                    target: 'http://20.20.20.9:8088', //API服务器的地址
                    ws: true,  //代理websockets
                    changeOrigin: true, // 虚拟的站点需要更管origin
                    pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                        '^/api': ''
                    }
                }
            }
        }
}
// // target: 'http://20.20.20.9:8088',
