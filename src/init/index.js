import buildUI from './UI';

const init = () => {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = 'https://yannprada.github.io/cookie-garden-helper/static/styles.css';
  document.getElementsByTagName('head')[0].appendChild(link);

  buildUI();
};

export default init;
