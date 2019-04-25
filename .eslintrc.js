module.exports = {
    root: true,
    extends: "eslint-config-egg",
    parser: 'typescript-eslint-parser',
    plugins: [
    'react',
    'typescript'
    ],
    'settings': {},
    rules: {
    // 缩进为两个空格
    "indent": ["error", 4]
    }
 }