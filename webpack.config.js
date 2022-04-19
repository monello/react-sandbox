const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',    // The path to the HTML file that Webpack must use a s a template to generate the final entry HTML file
            filename: 'index.html'              // Here we specify what we want Webpack to call the final HTML file
        })
    ]
};
