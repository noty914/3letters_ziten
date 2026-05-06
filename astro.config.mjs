import { defineConfig } from 'astro/config';

// GitHub Pages（プロジェクトサイト）向けに site / base を自動設定
// 公開 URL: https://<owner>.github.io/<repo>/
//
// GITHUB_ACTIONS には依存しない。OWNER が空でも GITHUB_REPOSITORY（owner/repo）から復元する。
const repoFull = process.env.GITHUB_REPOSITORY ?? '';
const repoParts = repoFull.split('/').filter(Boolean);
const repoFromSlug =
  repoParts.length >= 2 ? repoParts[repoParts.length - 1] : undefined;
const ownerFromSlug =
  process.env.GITHUB_REPOSITORY_OWNER?.trim() ||
  (repoParts.length >= 2 ? repoParts[0] : undefined);
const isGithubRepoBuild = Boolean(ownerFromSlug && repoFromSlug);

const site = isGithubRepoBuild
  ? `https://${ownerFromSlug}.github.io`
  : 'https://example.com';
const base = isGithubRepoBuild ? `/${repoFromSlug}/` : '/';

export default defineConfig({
  site,
  base,
  compressHTML: true,
  trailingSlash: 'always',
});
