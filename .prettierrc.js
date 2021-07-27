//文档https://prettier.io/docs/en/options.html

module.exports = {
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'none', // 尾部不加逗号
  printWidth: 120,
  arrowParens: 'always', // 箭头函数单个参数时加括号
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'ignore',
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  proseWrap: 'never',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  useTabs: false,
  vueIndentScriptAndStyle: false,
  endOfLine: "auto",
  HTMLWhitespaceSensitivity: "ignore",
  extends: [
    //继承 vue 的标准特性
    "plugin:vue/essential",
    "eslint:recommended",
    //避免与 prettier 冲突
    "plugin:prettier/recommended",
  ]
};
