const Dotenv = require('dotenv-webpack')
const fs = require('fs')
module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [new Dotenv()],
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: {
      key: fs.readFileSync('.certs/key.pem'),
      cert: fs.readFileSync('.certs/cert.pem'),
    },
    hotOnly: false,
  },
}
