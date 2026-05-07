export type TierKey = 'primary' | 'intermediate' | 'advanced';

export interface TierBlocks {
  primary: string;
  intermediate: string;
  advanced: string;
}

/**
 * 本文は見出しで区切る。
 * 互換対応:
 * - 旧: ## 初級 / ## 中級 / ## 上級
 * - 新: ## ① 非エンジニア向けのざっくり概要 / ## ② ちょっとだけ詳しく / ## ③ もっと知りたい人向け
 */
export function splitMarkdownTiers(md: string): TierBlocks {
  const buf: Record<TierKey, string[]> = {
    primary: [],
    intermediate: [],
    advanced: [],
  };
  let current: TierKey | null = null;

  for (const line of md.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (/^##\s*(初級|①|1)[)\.．]?(?:\s|$)/.test(trimmed)) {
      current = 'primary';
      continue;
    }
    if (/^##\s*(中級|②|2)[)\.．]?(?:\s|$)/.test(trimmed)) {
      current = 'intermediate';
      continue;
    }
    if (/^##\s*(上級|③|3)[)\.．]?(?:\s|$)/.test(trimmed)) {
      current = 'advanced';
      continue;
    }
    if (current) buf[current].push(line);
  }

  return {
    primary: buf.primary.join('\n').trim(),
    intermediate: buf.intermediate.join('\n').trim(),
    advanced: buf.advanced.join('\n').trim(),
  };
}
