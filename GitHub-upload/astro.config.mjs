import { defineConfig } from 'astro/config';

// GitHub Actions 上では GitHub Pages（プロジェクトサイト）向けに site / base を自動設定
// 公開 URL: https://<GITHUB_REPOSITORY_OWNER>.github.io/<リポジトリ名>/
const onGithubActions = process.env.GITHUB_ACTIONS === 'true';
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];

const site =
  onGithubActions && owner
    ? `https://${owner}.github.io`
    : 'https://example.com';
const base = onGithubActions && repo ? `/${repo}/` : '/';

export default defineConfig({
  site,
  base,
  compressHTML: true,
  trailingSlash: 'always',
});
