const path = require('path');

module.exports = {
    mode: "production",
    entry: './fanbox-downloader.ts',
    output: {
        filename: 'fanbox-downloader.min.js',
        path: path.resolve(__dirname, 'docs'),
        library: {
            type: 'module',
        },
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },
    resolve: {
        // download-helper は .js(コンパイル済み) と .ts(ソース) を同梱している。
        // .js を先に解決しないと ts-loader が node_modules 内の .ts を再コンパイルしようとして失敗する。
        extensions: ['.js', '.ts']
    },
    experiments: {
        outputModule: true,
    },
}
