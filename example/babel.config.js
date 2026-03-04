/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-worklets-core/plugin'],
    [
      'react-native-reanimated/plugin',
      {
        processNestedWorklets: true,
      },
    ],
  ],
}
