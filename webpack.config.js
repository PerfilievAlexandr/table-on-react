const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.join(__dirname, "/public"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test : /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: ["file-loader"]
            } 
        ]
    }
};