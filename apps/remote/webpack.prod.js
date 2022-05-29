
const { merge } = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
    
    plugins: [
        new ModuleFederationPlugin({
            name: "counter",
            filename: "remoteEntry.js",
            remotes: {},
            exposes: {
              "./Counter": './src/Counter.jsx'
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
            },
    }),
    new HtmlWebPackPlugin({
        template: "./src/index.html",
    }),
  ],
};
module.exports = merge(commonConfig, prodConfig);
