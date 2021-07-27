module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  // required to lint *.vue files
  plugins: ['html', 'vue'],
  // add your custom rules here
  rules: {
    semi: [0, 'always'], //强制语句分号结尾
    'arrow-parens': 0, //箭头函数用小括号括起来
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 关键字前后空格
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 条件语句中赋值语句
    'no-cond-assign': 2,
    // 单行代码块两边加空格
    'block-spacing': [2, 'always'],
    // 键值对当中冒号与值之间要留空白
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ]
  }
};
