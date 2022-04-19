const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',  // Tell webpack where to fine the entry file (The file is starts building it's import-tree from), by default is looks in the 'src' dir for an index.js file, but we are now switching to TS
    resolve: {  // by default webpack doesn't process files with a '.ts' extension, so we need to tell it to do so
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        // Each rule tells Webpack how to handle ceratin files
        rules: [{
            test: /.tsx?$/, // A Regex that tests for filenames that end with either ".ts" or ".tsx"
            loader: 'ts-loader' // Tell Webpack to ignore (exclude from processing) the node_modules directory
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',    // The path to the HTML file that Webpack must use a s a template to generate the final entry HTML file
            filename: 'index.html'              // Here we specify what we want Webpack to call the final HTML file
        })
    ]
};
