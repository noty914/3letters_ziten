export type TierKey = 'primary' | 'intermediate' | 'advanced';

export interface TierBlocks {
  primary: string;
  intermediate: string;
  advanced: string;
}

/**
 * 本文は見出しで区切る: ## 初級 / ## 中級 / ## 上級
 * （「（①）」などの追記はOK。見出し行の先頭が上記であれば認識）
 */
export function splitMarkdownTiers(md: string): TierBlocks {
  const buf: Record<TierKey, string[]> = {
    primary: [],
    intermediate: [],
    advanced: [],
  };
  let current: TierKey | null = null;

  for (const line of md.split(/\r?\n/)) {
    const heading = line.match(/^##\s*(初級|中級|上級)/);
    if (heading) {
      if (heading[1] === '初級') current = 'primary';
      else if (heading[1] === '中級') current = 'intermediate';
      else if (heading[1] === '上級') current = 'advanced';
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
