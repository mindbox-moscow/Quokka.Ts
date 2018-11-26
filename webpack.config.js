module.exports = {

    mode: "development",

    entry: [
        "@babel/polyfill",
        "./src/index.ts"
    ],

    output: {
        filename: "index.js",
        libraryTarget: 'umd'
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [ ".webpack.js", ".web.js", ".ts", ".tsx", ".js" ]
    },
    
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { 
                test: /\.ts$/, 
                loaders: ["babel-loader", "ts-loader"], 
                exclude: /node_modules/
            }
        ]
    },

    performance: {
        maxEntrypointSize: 500000,
        maxAssetSize: 500000
    }
};