import { defineConfig } from '@playwright/test';
export default defineConfig({ testDir: 'CMS', testMatch: ['**/*.spec.js'] });
