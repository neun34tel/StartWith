/**
 * Created by Kay on 3/14/2016.
 */
module.exports = {
    entry: "./js/main.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
