document.addEventListener('DOMContentLoaded', () => {
  const ramos = document.querySelectorAll('.ramo');
  const infoBox = document.getElementById('info-box');

  ramos.forEach(ramo => {
    ramo.addEventListener('click', () => {
      const abre = ramo.dataset.abre;
      const extra = ramo.dataset.extra;
      const requiere = ramo.dataset.requiere;

      let msg = `<strong>${ramo.textContent}</strong><br>`;

      if (abre) {
        msg += `Abre: ${abre.replaceAll('-', ' ').replaceAll(',', ', ')}<br>`;
      }
      if (extra) {
        msg += `Además requiere: ${extra.replaceAll('-', ' ').replaceAll(',', ', ')}<br>`;
      }
      if (requiere) {
        msg += `Requiere: ${requiere.replaceAll('-', ' ')}<br>`;
      }

      infoBox.innerHTML = msg;
      infoBox.classList.add('visible');

      setTimeout(() => {
        infoBox.classList.remove('visible');
      }, 6000);
    });
  });
});
