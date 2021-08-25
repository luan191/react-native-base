module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          images: './assets/images',
          screens: './screens',
          components: './components',
          actions: './actions',
          constants: './constants',
          network: './network',
          reducers: './reducers',
          types: './types'
        },
        extensions: ['.jsx', '.json', '.tsx', '.ts']
      }
    ]
  ]
}
