module.exports = {
    resolve: {
        fallback: { process: require.resolve("process/browser") },
    },
    devServer: {
        headers: {
            'X-Frame-Options': 'deny'
        }
    }
};