module.exports = {
  extends: ['universe', 'universe/shared/typescript-analysis'],
  rules: {
    semi: 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
