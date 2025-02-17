const path = require('path');
const html_webpack_plugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

/**
 * Semantic versioning
 * @link https://semver.org/
 */
const version = '0.1.1-alpha' // See CHANGELOG.md for version history

module.exports = (env) => {
    // const is_production = argv.mode === 'production';
    const src_domain_config = require(path.join(__dirname, `src/${env.project}/config.js`));
    const project_name = env && env.project ? env.project : 'default';
    const dist_path = env && env.stage ? 'stage' : 'public';

    return {
        entry: [
            `./src/${project_name}/index.js`
        ],
        output: {
            filename: 'bundle.js?name=[name]&ch=[contenthash]',
            path: path.resolve(__dirname, 'dist', dist_path, project_name),
        },
        plugins: [
            new html_webpack_plugin({
                template: `./src/${project_name}/index.html`,
                filename: 'index.html',
                inject: 'body',
            }),
            new MiniCssExtractPlugin({
                filename: "default.css?name=[name]&ch=[contenthash]",
                chunkFilename: "chuck.css?id=[id]&ch=[contenthash]"
            }),
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(src_domain_config),
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader, "css-loader"
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
        },
        resolve: {
            alias: {
                app: path.resolve(__dirname, 'app/'),
                assets: path.resolve(__dirname, 'assets/')
            }
        }
    };
};
