/** A–Z クリック時の短いフルスクリーン演出（各文字色 30% + 中央抜き） */

const FLASH_MS = 120;

let navigating = false;

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace('#', '').trim();
  if (h.length === 3) {
    const r = parseInt(h[0] + h[0], 16);
    const g = parseInt(h[1] + h[1], 16);
    const b = parseInt(h[2] + h[2], 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }
  if (h.length === 6) {
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
      return `rgba(255,255,255,${alpha})`;
    }
    return `rgba(${r},${g},${b},${alpha})`;
  }
  return `rgba(255,255,255,${alpha})`;
}

function letterColorAt30(letter: string): string {
  const root = document.documentElement;
  const raw = getComputedStyle(root).getPropertyValue(`--az-${letter}`).trim();
  if (!raw) return `rgba(255,255,255,${0.3})`;
  if (raw.startsWith('#')) return hexToRgba(raw, 0.3);
  const rgb = raw.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
  if (rgb) {
    return `rgba(${rgb[1]},${rgb[2]},${rgb[3]},0.3)`;
  }
  return `rgba(255,255,255,0.3)`;
}

function showFlashOverlay(letter: string, fillRgba: string, href: string): void {
  const ns = 'http://www.w3.org/2000/svg';
  const id = `letter-flash-mask-${Date.now().toString(36)}`;

  const wrap = document.createElement('div');
  wrap.className = 'letter-flash-root';
  wrap.setAttribute('aria-hidden', 'true');

  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.classList.add('letter-flash-svg');

  const defs = document.createElementNS(ns, 'defs');
  const mask = document.createElementNS(ns, 'mask');
  mask.setAttribute('id', id);
  mask.setAttribute('maskUnits', 'userSpaceOnUse');
  mask.setAttribute('maskContentUnits', 'userSpaceOnUse');

  const mr = document.createElementNS(ns, 'rect');
  mr.setAttribute('x', '0');
  mr.setAttribute('y', '0');
  mr.setAttribute('width', '100');
  mr.setAttribute('height', '100');
  mr.setAttribute('fill', 'white');

  const text = document.createElementNS(ns, 'text');
  text.setAttribute('x', '50');
  text.setAttribute('y', '50');
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('dominant-baseline', 'central');
  text.setAttribute('fill', 'black');
  text.setAttribute('font-size', '38');
  text.setAttribute('font-weight', '900');
  text.setAttribute(
    'font-family',
    "'Segoe UI',system-ui,-apple-system,'Helvetica Neue',Arial,sans-serif",
  );
  text.textContent = letter;

  mask.appendChild(mr);
  mask.appendChild(text);
  defs.appendChild(mask);

  const rect = document.createElementNS(ns, 'rect');
  rect.setAttribute('x', '0');
  rect.setAttribute('y', '0');
  rect.setAttribute('width', '100');
  rect.setAttribute('height', '100');
  rect.setAttribute('fill', fillRgba);
  rect.setAttribute('mask', `url(#${id})`);

  svg.appendChild(defs);
  svg.appendChild(rect);
  wrap.appendChild(svg);
  document.body.appendChild(wrap);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.setTimeout(() => {
        window.location.assign(href);
      }, FLASH_MS);
    });
  });
}

export function initAlphabetNavFlash(): void {
  const grid = document.querySelector('.alphabet-grid');
  if (!grid) return;

  grid.addEventListener('click', (e) => {
    if (navigating) return;

    const a = (e.target as HTMLElement | null)?.closest?.('a.az-link');
    if (!a || !grid.contains(a)) return;

    if (e.defaultPrevented) return;
    if (e.button !== 0) return;
    const me = e as MouseEvent;
    if (me.metaKey || me.ctrlKey || me.shiftKey || me.altKey) return;

    const href = a.getAttribute('href');
    if (!href) return;

    const letter = (a.textContent || '').trim().toUpperCase();
    if (!/^[A-Z]$/.test(letter)) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    e.preventDefault();
    navigating = true;

    const fill = letterColorAt30(letter);
    showFlashOverlay(letter, fill, href);
  });
}

if (typeof document !== 'undefined') {
  const run = () => initAlphabetNavFlash();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
}
