module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        babelOptions: {
            configFile: "./babel.config.json"
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: ['eslint:recommended', 'google'],
    rules: {
        semi: 'off',
        'comma-dangle': 'off',
        'object-curly-spacing': 'off',
        'require-jsdoc': 'off',
        'linebreak-style': 'off',
        'indent': ['error', 4],
        'operator-linebreak': 'off',
        'arrow-parens': 'off',
        'max-len': 120
    }

}
