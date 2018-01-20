const path = require('path')

export default function (config, env, helpers) {
  // Additional top-level alias
  config.resolve.alias = Object.assign(
    {},
    {
      '@': path.resolve(__dirname, 'src/components'),
      '_': path.resolve(__dirname, 'src/routes')
    },
    config.resolve.alias
  )
}
