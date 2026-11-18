(function () {
  'use strict';
  const page = document.querySelector('.ac-page');
  if (!page) return;
  const chassis = page.querySelector('#ac-chassis');
  const capacity = page.querySelector('#ac-capacity');
  const reset = page.querySelector('#ac-reset');
  const cards = Array.from(page.querySelectorAll('.ac-card'));
  const empty = page.querySelector('#ac-empty');

  function render() {
    const matches = cards.filter(function (card) {
      const value = Number(card.dataset.capacity);
      let volumeMatches = true;
      if (capacity.value === 'small') volumeMatches = value > 0 && value <= 3;
      if (capacity.value === 'medium') volumeMatches = value > 3 && value <= 6;
      if (capacity.value === 'large') volumeMatches = value > 6;
      return (!chassis.value || card.dataset.chassis === chassis.value) && volumeMatches;
    });
    const visible = new Set(matches);
    cards.forEach(function (card) { card.hidden = !visible.has(card); });
    empty.hidden = matches.length > 0;
    reset.disabled = !chassis.value && !capacity.value;
  }

  [chassis, capacity].forEach(function (field) {
    field.addEventListener('change', render);
  });
  reset.addEventListener('click', function () {
    chassis.value = '';
    capacity.value = '';
    render();
  });
  page.querySelector('#ac-filter-controls').hidden = false;
  render();
})();
