import init from './init';
import save from './save';
import load from './load';

const cookieGardenHelper = {
  init,
  save,
  load,
};

Game.registerMod('Cookie Garden Helper', cookieGardenHelper);
