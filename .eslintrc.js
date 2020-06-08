module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [`plugin:vue/essential`, `eslint:recommended`],
  parserOptions: {
    parser: `babel-eslint`
  },
  rules: {
    "no-console": process.env.NODE_ENV === `production` ? `warn` : `off`,
    "no-debugger": process.env.NODE_ENV === `production` ? `warn` : `off`,
    indent: [`error`, 2],
    semi: [`error`, `never`],
    quotes: [`error`, `backtick`],
    "comma-dangle": [`error`, `never`],
    "object-curly-spacing": [`error`, `always`],
    "arrow-parens": [`error`, `as-needed`],
    "linebreak-style": 0
  },
  overrides: [
    {
      files: [
        `**/__tests__/*.{j,t}s?(x)`,
        `**/tests/unit/**/*.spec.{j,t}s?(x)`
      ],
      env: {
        jest: true
      }
    }
  ]
}

