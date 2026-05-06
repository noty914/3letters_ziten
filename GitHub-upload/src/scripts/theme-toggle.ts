export type ThemeMode = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'theme';
const ORDER: ThemeMode[] = ['system', 'light', 'dark'];

const LABELS: Record<ThemeMode, { aria: string; title: string }> = {
  system: {
    aria: '表示テーマ: システム設定に準拠。クリックでライトモードへ',
    title: 'システムに準拠（クリックで切替）',
  },
  light: {
    aria: '表示テーマ: ライト。クリックでダークモードへ',
    title: 'ライト（クリックで切替）',
  },
  dark: {
    aria: '表示テーマ: ダーク。クリックでシステム準拠へ',
    title: 'ダーク（クリックで切替）',
  },
};

function readStored(): ThemeMode {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'light' || v === 'dark' || v === 'system') return v;
  } catch {
    /* ignore */
  }
  return 'dark';
}

function currentFromDom(): ThemeMode {
  const t = document.documentElement.dataset.theme;
  if (t === 'light' || t === 'dark' || t === 'system') return t;
  return 'dark';
}

export function applyTheme(mode: ThemeMode): void {
  const root = document.documentElement;
  root.dataset.theme = mode;
  root.style.colorScheme =
    mode === 'dark' ? 'dark' : mode === 'light' ? 'light' : 'light dark';

  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    /* ignore */
  }

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.dataset.mode = mode;
    const { aria, title } = LABELS[mode];
    btn.setAttribute('aria-label', aria);
    btn.setAttribute('title', title);
  }
}

export function initThemeToggle(): void {
  applyTheme(readStored());

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const cur = currentFromDom();
    const i = ORDER.indexOf(cur);
    applyTheme(ORDER[(i + 1) % ORDER.length]!);
  });
}
