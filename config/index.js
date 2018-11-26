var path = require('path');

module.exports = {
    dev: {
        host: 'localhost',
        port: 9100,
        autoOpenBrowser: false,
        assetsSubDirectory: 'static',//配置静态资源的访问自路径
        assetsPublicPath: '/',//配置静态资源的访问路径
        proxyTable: {}
    },
    build: {
        assetsSubDirectory: 'static',//配置静态资源的访问自路径
        assetsPublicPath: '/',//配置静态资源的访问路径
    }
};
