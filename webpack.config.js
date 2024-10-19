const path = require('path');
const html_webpack_plugin = require('html-webpack-plugin');

module.exports = (env) => {
    const project_name = env && env.project ? env.project : 'default';
    const dist_path = env && env.stage ? 'stage' : 'public';

    return {
        entry: `./src/${project_name}/index.js`,
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist', dist_path, project_name),
            // publicPath: '/'
        },
        plugins: [
            new html_webpack_plugin({
                template: `./src/${project_name}/index.html`,
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
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'images/'
                            }
                        }
                    ]
                }
            ]
        },
        devServer: {
            host: '0.0.0.0',
            port: 3000, // You can change this port if needed
            allowedHosts: 'all' // Allow all hosts to access the dev server
        }
    };
};
