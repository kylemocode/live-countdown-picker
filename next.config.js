const withOffline = require('next-offline')
const path = require('path');
const nextConfig = {
    generateInDevMode:false,
    dontAutoRegisterSw:true,
    generateSw:false,
    workboxOpts: {
        swDest: './service-worker.js',
        swSrc: path.join(__dirname, 'sw.js'),
    }
}

module.exports = withOffline(nextConfig)