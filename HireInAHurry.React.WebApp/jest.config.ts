module.exports = {
    preset:  'ts-jest/presets/js-with-ts',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
      },
    setupFilesAfterEnv:["@testing-library/jest-dom/extend-expect"],
    moduleNameMapper: {
      "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy"
    },

    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    // transform: {
    //   '\\.[jt]sx?$': 'ts-jest',
    // },
  };