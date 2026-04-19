import js from '@eslint/js'

export default [
  {
    ignores: ["dist/**", "node_modules/**"]
  },
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
    }
  }
]
