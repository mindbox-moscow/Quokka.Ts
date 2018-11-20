module.exports = {
    entry: "./src/index",
    output: {
    	filename: "./dist/index.js",
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [ ".webpack.js", ".web.js", ".ts", ".tsx", ".js" ]
    },
    
    module: {
        rules: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
          { test: /\.ts$/, loader: "ts-loader" }
      ],
    }
};