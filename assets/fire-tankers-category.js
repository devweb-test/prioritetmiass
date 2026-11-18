(function () {
  'use strict';
  const page = document.querySelector('.ac-page');
  if (!page) return;
  const chassis = page.querySelector('#ac-chassis');
  const capacity = page.querySelector('#ac-capacity');
  const reset = page.querySelector('#ac-reset');
  const cards = Array.from(page.querySelectorAll('.ac-card'));
  const more = page.querySelector('#ac-more');
  const progress = page.querySelector('#ac-progress');
  const empty = page.querySelector('#ac-empty');
  const batch = 9;
  let limit = batch;

  function render() {
    const matches = cards.filter(function (card) {
      const value = Number(card.dataset.capacity);
      let volumeMatches = true;
      if (capacity.value === 'small') volumeMatches = value > 0 && value <= 3;
      if (capacity.value === 'medium') volumeMatches = value > 3 && value <= 6;
      if (capacity.value === 'large') volumeMatches = value > 6;
      return (!chassis.value || card.dataset.chassis === chassis.value) && volumeMatches;
    });
    const visible = new Set(matches.slice(0, limit));
    cards.forEach(function (card) { card.hidden = !visible.has(card); });
    progress.textContent = 'Показано ' + visible.size + ' из ' + matches.length;
    more.hidden = visible.size >= matches.length;
    more.textContent = 'Показать ещё ' + Math.min(batch, matches.length - visible.size);
    empty.hidden = matches.length > 0;
    progress.hidden = matches.length === 0;
    reset.disabled = !chassis.value && !capacity.value;
  }

  [chassis, capacity].forEach(function (field) {
    field.addEventListener('change', function () { limit = batch; render(); });
  });
  reset.addEventListener('click', function () {
    chassis.value = '';
    capacity.value = '';
    limit = batch;
    render();
  });
  more.addEventListener('click', function () {
    const next = cards.filter(function (card) { return !card.hidden; }).length;
    limit += batch;
    render();
    cards.filter(function (card) { return !card.hidden; })[next]?.focus({ preventScroll: true });
  });
  page.querySelector('#ac-filter-controls').hidden = false;
  render();
})();
