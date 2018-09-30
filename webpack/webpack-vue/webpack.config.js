const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');//vue-loader 15*之后都要加此配置项

module.exports={
    mode: 'production',
    entry:'./app.js',
    output:{
        path:path.join(__dirname,'dist'),
        // publicPath:'/dist',//不注释掉会和html-webpack-plugin冲突
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(png|jpg|gif|eot|svg|ttf|woff)/,use:[{
                loader:'url-loader',
                options:{
                    limit:50000
                }
            }]},
            {test:/\.js$/,include:[path.resolve(__dirname,'src')],use:{
                loader:'babel-loader',
                options:{
                    presets:['env']
                }
            }},
            {test:/.vue$/,loader:'vue-loader'}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'template.html',
            title:'html-webpack-plugin'
        }),
        new VueLoaderPlugin()
    ]
}