const COOKIE_NAME = 'googtrans';

function getGoogTransCookie(): string | null {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

function setGoogTrans(value: string): void {
  // Must be set on both the bare hostname and the full domain for GT to pick it up
  const bases = [`path=/`, `path=/; domain=${window.location.hostname}`];
  for (const base of bases) {
    document.cookie = `${COOKIE_NAME}=${value}; ${base}`;
  }
}

function clearGoogTrans(): void {
  const expired = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';
  const bases = [`path=/; ${expired}`, `path=/; ${expired}; domain=${window.location.hostname}`];
  for (const base of bases) {
    document.cookie = `${COOKIE_NAME}=; ${base}`;
  }
}

function currentLang(): string {
  const cookie = getGoogTransCookie();
  // cookie value is like "/ru/en" — take the last segment
  return cookie?.split('/').pop() ?? 'ru';
}

function updateActiveLinks(lang: string): void {
  document.querySelectorAll<HTMLElement>('[data-lang]').forEach((el) => {
    el.classList.toggle('header__lang-link_active', el.dataset.lang === lang);
  });
}

export function initLanguageSwitcher(): void {
  updateActiveLinks(currentLang());

  document.querySelectorAll<HTMLElement>('[data-lang]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = el.dataset.lang ?? 'ru';

      if (lang === 'ru') {
        clearGoogTrans();
      } else {
        setGoogTrans(`/ru/${lang}`);
      }

      location.reload();
    });
  });
}
