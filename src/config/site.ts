/**
 * サイト表示名・既定の meta 説明文。
 *
 * GitHub Pages の URL は `https://<ユーザー>.github.io/three-letter-dictionary/` のように
 * **リポジトリ名 `three-letter-dictionary`** と揃えると分かりやすいです（GitHub でリネーム後、再デプロイ）。
 */
/** サイト名（ヘッダ・フッター・検索結果の title に使用） */
export const SITE_NAME = '3文字略語辞典';

/** トップのリード文（`set:html` 用。改行は `<br />`） */
export const SITE_LEDE_PRIMARY =
  '非エンジニア向けに、IT業界でよく出てくる3文字略語をまとめました。<br />職場の先輩・上司・取引先が使っていた「あの略語」を、瞬間的にモノにする参考になれば。';

/** 既定の meta description（検索スニペット用・日本語） */
export const SITE_DESCRIPTION =
  '非エンジニア向けに、IT業界でよく出てくる3文字略語を索引・検索で引ける無料の辞典サイトです。';

export const SITE_FOOTER = `${SITE_NAME} · static site`;

/** A–Z 索引帯の見た目。`a` = キー風（既定）、`b` = フラットカード＋軽い浮き */
export type AlphabetNavVariant = 'a' | 'b';
export const ALPHABET_NAV_VARIANT: AlphabetNavVariant = 'b';
