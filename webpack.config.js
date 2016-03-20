/**
 * Created by Kay on 3/14/2016.
 */
this.plugins.push(new webpack.HotModuleReplacementPlugin())
module.exports = {
    entry   : [ "webpack/hot/dev-server", "./js/main.js" ],
    output  : {
        path     : __dirname + "/dist",
        filename : "/bundle.js"
    },
    module  : {
        loaders : [
            {
                test   : /\.css$/,
                loader : "style!css"
            },
            {
                test    : /\.js$/,
                exclude : /(node_modules|bower_components)/,
                loader  : "babel-loader",
                query: {
                    presets: [ 'es2015' ]
                }
            }
        ]
    },
    resolve : {
        alias : {
            "jquery" : "../bower_components\\jquery\\dist\\jquery.js",
            "jQuery" : "../bower_components\\jquery\\dist\\jquery.js"
        }
    }
};
