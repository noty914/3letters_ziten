import type { CollectionEntry } from 'astro:content';
import { termSlug } from '@/lib/term-id';

export type TermEntry = CollectionEntry<'terms'>;

/** URL スラッグ → 用語エントリ（存在チェック・リンク生成用） */
export function termMap(terms: TermEntry[]): Map<string, TermEntry> {
  const m = new Map<string, TermEntry>();
  for (const t of terms) m.set(termSlug(t.id), t);
  return m;
}

/** related に書いた slug が実在するか。ビルド時に警告したい場合に使う */
export function missingRelatedSlugs(
  terms: TermEntry[],
  related: string[],
): string[] {
  const map = termMap(terms);
  return related.filter((s) => !map.has(s));
}
