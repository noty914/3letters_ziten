/**
 * 英語正式名（titleEn）を、略語スラッグに対応する頭文字を太字・大きめで並べられるよう分割する。
 *
 * 語はスペース・ハイフン類で分割する（例: Retrieval-Augmented → R と A を別語扱い）。
 * 強調する語数は min(略語の英字数, 語数)（略語が取れないときは先頭3語まで）。
 */
export type EnglishTitleSegment =
  | { type: 'text'; text: string }
  | { type: 'letter'; letter: string }; // A–Z（表示・CSS変数用）

const MAX_HIGHLIGHT = 12;

function tokenizeTitleEn(titleEn: string): string[] {
  return titleEn.trim().split(/[\s\-–—]+/).filter(Boolean);
}

function segmentsSingleWord(w: string): EnglishTitleSegment[] {
  let latinIndex = -1;
  for (let i = 0; i < w.length; i++) {
    const c = w[i];
    if (c && /[A-Za-z]/.test(c)) {
      latinIndex = i;
      break;
    }
  }
  if (latinIndex < 0) return [{ type: 'text', text: w }];
  const ch = w[latinIndex]!;
  const out: EnglishTitleSegment[] = [];
  const before = w.slice(0, latinIndex);
  const after = w.slice(latinIndex + 1);
  if (before) out.push({ type: 'text', text: before });
  out.push({ type: 'letter', letter: ch.toUpperCase() });
  if (after) out.push({ type: 'text', text: after });
  return out;
}

function slugLatinLetters(termSlug: string): string[] {
  const base = termSlug.replace(/\.md$/i, '').toLowerCase();
  return base.split('').filter((c) => /[a-z]/.test(c));
}

export function buildEnglishTitleSegments(
  titleEn: string,
  termSlug: string,
): EnglishTitleSegment[] | null {
  const words = tokenizeTitleEn(titleEn);
  if (words.length === 0) return null;

  if (words.length === 1) {
    return segmentsSingleWord(words[0] ?? '');
  }

  const slugLetters = slugLatinLetters(termSlug);
  const highlightCount = Math.min(
    slugLetters.length > 0 ? slugLetters.length : 3,
    words.length,
    MAX_HIGHLIGHT,
  );

  const out: EnglishTitleSegment[] = [];

  for (let wi = 0; wi < words.length; wi++) {
    const w = words[wi] ?? '';
    if (wi > 0) out.push({ type: 'text', text: ' ' });

    let latinIndex = -1;
    for (let i = 0; i < w.length; i++) {
      const c = w[i];
      if (c && /[A-Za-z]/.test(c)) {
        latinIndex = i;
        break;
      }
    }

    const highlightThisWord = wi < highlightCount && latinIndex >= 0;

    if (!highlightThisWord) {
      out.push({ type: 'text', text: w });
      continue;
    }

    const ch = w[latinIndex]!;
    const before = w.slice(0, latinIndex);
    const after = w.slice(latinIndex + 1);
    if (before) out.push({ type: 'text', text: before });
    out.push({ type: 'letter', letter: ch.toUpperCase() });
    if (after) out.push({ type: 'text', text: after });
  }

  return out;
}
