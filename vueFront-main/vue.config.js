const path = require('path');

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
})


module.exports = {
  devServer: {
    proxy: {
      "/v1": {
        "target": "http://localhost:8090",
        "pathRewrite": { '^/': '' },
        "changeOrigin": true,
        "ws": false,
      }
    }
  }
};

// module.exports = {
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, 'src/'),
//       "~": path.resolve(__dirname, 'src/components/'),
//     }
//   }
// };

// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         '@': path.join(__dirname, 'src/'),
//         "@@": path.join(__dirname, 'src/components/'),
//       }
//     }
//   }
// }