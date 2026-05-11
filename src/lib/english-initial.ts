/**
 * 英語正式名（titleEn）を、用語スラッグの英字（例: zip -> Z I P）に対応する文字を
 * titleEn 内で順番に強調できるよう分割する。
 *
 * 例:
 * - ZIP archive format -> Z I P を強調
 * - Identity and Access Management -> I A M を強調
 */
export type EnglishTitleSegment =
  | { type: 'text'; text: string }
  | { type: 'letter'; letter: string }; // A–Z（表示・CSS変数用）

const MAX_HIGHLIGHT = 12;

function slugLatinLetters(termSlug: string): string[] {
  const base = termSlug.replace(/\.md$/i, '').toLowerCase();
  return base.split('').filter((c) => /[a-z]/.test(c));
}

function splitBySlugLetters(titleEn: string, slugLetters: string[]): EnglishTitleSegment[] | null {
  if (!titleEn.trim()) return null;
  if (slugLetters.length === 0) return [{ type: 'text', text: titleEn }];

  const out: EnglishTitleSegment[] = [];
  let textBuffer = '';
  let matchIndex = 0;

  for (const ch of titleEn) {
    const target = slugLetters[matchIndex];
    const canMatch =
      !!target && /[A-Za-z]/.test(ch) && ch.toLowerCase() === target.toLowerCase();

    if (canMatch) {
      if (textBuffer) {
        out.push({ type: 'text', text: textBuffer });
        textBuffer = '';
      }
      out.push({ type: 'letter', letter: target.toUpperCase() });
      matchIndex += 1;
      continue;
    }

    textBuffer += ch;
  }

  if (textBuffer) out.push({ type: 'text', text: textBuffer });

  // 略語の全英字を titleEn 内で順に見つけられない場合は、安全に未強調表示へ戻す。
  if (matchIndex < slugLetters.length) {
    return [{ type: 'text', text: titleEn }];
  }

  return out.length > 0 ? out : [{ type: 'text', text: titleEn }];
}

export function buildEnglishTitleSegments(
  titleEn: string,
  termSlug: string,
): EnglishTitleSegment[] | null {
  const slugLetters = slugLatinLetters(termSlug).slice(0, MAX_HIGHLIGHT);
  return splitBySlugLetters(titleEn, slugLetters);
}
