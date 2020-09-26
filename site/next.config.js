// const fs = require('fs')
const path = require('path')
//
// module.exports = {
//   webpack: config => {
//     config.module.rules.push({
//       test: /\.js$/,
//       use: ['source-map-loader'],
//       enforce: 'pre',
//     })
//     return config
//   },
// }

const withTM = require('next-transpile-modules')(['../src']); // pass the modules you would like to see transpiled

module.exports = withTM(
    {
        sassOptions: {
            includePaths: [path.join(__dirname, 'pages')],
        }
    }
);