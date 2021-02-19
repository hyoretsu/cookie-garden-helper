const buildUI = () => {
  const cookieGardenHelperUI = document.createElement('div');
  cookieGardenHelperUI.id = 'cookieGardenHelper';

  const howItWorks = document.createElement('a');
  Object.assign(howItWorks, {
    href: 'https://github.com/yannprada/cookie-garden-helper#how-it-works',
    target: '_blank',
    rel: 'noopener noreferrer',
    innerHTML: 'how it works',
  });
  const modTitle = document.createElement('span');
  Object.assign(modTitle, {
    className: 'title',
    innerHTML: 'Cookie Garden Helper',
  });
  const infoDiv = document.createElement('div');
  infoDiv.appendChild(howItWorks);
  infoDiv.appendChild(modTitle);
  cookieGardenHelperUI.appendChild(infoDiv);

  document.getElementById('row2').insertAdjacentElement('beforeend', cookieGardenHelperUI);

  const cookieGardenHelperButton = document.createElement('span');
  Object.assign(cookieGardenHelperButton, {
    className: 'productButton',
    innerHTML: 'Cookie Garden Helper',
    onclick: () => {
      document.getElementById('cookieGardenHelper').classList.toggle('visible');
    },
  });

  document.querySelector('#row2 .productButtons').insertAdjacentElement('beforeend', cookieGardenHelperButton);
};

export default buildUI;
