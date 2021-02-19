import { configs, changedConfigs } from '../config';

const load = saveString => {
  changedConfigs = JSON.parse(saveString);
  Object.assign(configs, changedConfigs);
};

export default load;
