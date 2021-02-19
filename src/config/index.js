export const defaultConfigs = {
  autoHarvest: false,
  autoHarvestAllMature: false,
  autoHarvestNewSeeds: true,
  autoHarvestAvoidImmortals: true,
  autoHarvestWeeds: true,
  autoHarvestCleanGarden: false,
  autoHarvestCheckCpSMult: false,
  autoHarvestMiniCpSMult: {
    value: 1,
    min: 0,
  },
  autoHarvestDying: true,
  autoHarvestDyingSeconds: 60,
  autoHarvestCheckCpSMultDying: false,
  autoHarvestMiniCpSMultDying: {
    value: 1,
    min: 0,
  },
  autoPlant: false,
  autoPlantCheckCpSMult: false,
  autoPlantMaxiCpSMult: {
    value: 0,
    min: 0,
  },
  savedPlot: [],
};

export const configs = { ...defaultConfigs };
// eslint-disable-next-line
export let changedConfigs = {};
