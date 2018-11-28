var path = require('path');

module.exports = {

    mode: "development",

    entry: [
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
            },
            
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                include: [
                    // antlr4ts targets es2015 and we want our library to target es5
                    path.resolve(__dirname, "node_modules/antlr4ts")
                ],
                
            }
            
        ]
    },

    performance: {
        maxEntrypointSize: 500000,
        maxAssetSize: 500000
    }
};