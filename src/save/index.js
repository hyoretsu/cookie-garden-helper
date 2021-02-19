import { configs, changedConfigs } from '../config';

const save = () => {
  Object.assign(configs, changedConfigs);
  return JSON.stringify(changedConfigs);
};

export default save;
