import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['dist/**', 'node_modules/**']
  },
  // JS config
  {
    files: ['**/*.{js,jsx}'],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  // TypeScript config
  {
    files: ['**/*.{ts,tsx}'],
    ...tseslint.configs.recommended[0],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { 
        varsIgnorePattern: '^_|^(VStack|Button|Flex|Divider|Progress|keyframes|ClarivueIcon|float|CircularIndicator)$',
        argsIgnorePattern: '^_|^src$',
        ignoreRestSiblings: true
      }],
      '@typescript-eslint/no-non-null-assertion': 'warn'
    }
  }
]
