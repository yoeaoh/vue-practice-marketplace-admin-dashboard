import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'app',
    formatters: true,
    vue: true,
    typescript: true,

    stylistic: {
      indent: 2,
      quotes: 'single',
    },
  },
  {
    rules: {
      'vue/max-attributes-per-line': ['error', { singleline: { max: 1 }, multiline: { max: 1 } }],
      'unused-imports/no-unused-imports': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
)
