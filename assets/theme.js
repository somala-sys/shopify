(() => {
  const fmtMoney = (cents, currency = 'EUR') => {
    try {
      return new Intl.NumberFormat(document.documentElement.lang || 'fr', {
        style: 'currency',
        currency
      }).format((cents || 0) / 100);
    } catch {
      return ((cents || 0) / 100).toFixed(2) + ' ' + currency;
    }
  };
  document.querySelectorAll('[data-money-cents]').forEach(el => {
    const cents = parseInt(el.getAttribute('data-money-cents') || '0', 10);
    const currency = el.getAttribute('data-currency') || 'EUR';
    el.textContent = fmtMoney(cents, currency);
  });
})();
