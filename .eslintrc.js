/* eslint-disable */
module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
      react: {
          version: require('./package.json').peerDependencies.react,
    },
  },
    "parserOptions": {
        "requireConfigFile": false,
        "ecmaFeatures": {
            "jsx": true
        },
    }
};
