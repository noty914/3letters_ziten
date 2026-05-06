/**
 * 英語正式名（titleEn）を、先頭3語それぞれの「最初のラテン文字」を
 * インデックスと同じ A–Z 色で並べられるよう分割する。
 * 4語目以降は通常のミュートテキストとして連結する。
 */
export type EnglishTitleSegment =
  | { type: 'text'; text: string }
  | { type: 'letter'; letter: string }; // A–Z（表示・CSS変数用）

const MAX_HIGHLIGHT_WORDS = 3;

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

export function buildEnglishTitleSegments(titleEn: string): EnglishTitleSegment[] | null {
  const words = titleEn.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return null;

  if (words.length === 1) {
    return segmentsSingleWord(words[0] ?? '');
  }

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

    const highlightThisWord = wi < MAX_HIGHLIGHT_WORDS && latinIndex >= 0;

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
