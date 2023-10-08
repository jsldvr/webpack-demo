const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const projectName = env && env.project ? env.project : 'default';
    const outputPath = env && env.stage ? 'stage' : 'public';

    return {
        entry: `./src/${projectName}/index.js`,
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist', outputPath, projectName),
            // publicPath: '/'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: `./src/${projectName}/index.html`,
                filename: 'index.html',
                // inject: 'body',
                inject: true,
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                }
            ]
        }
    };
};
