import Constants from "expo-constants";

export const prodUrl = "https://someapp.herokuapp.com";

const ENV = {
  dev: {
    apiUrl: "http://192.168.1.64:3000",
  },
  staging: {
    apiUrl: prodUrl,
  },
  prod: {
    apiUrl: prodUrl,
  },
};

function getEnvVars(env = "") {
  if (env === null || env === undefined || env === "") return ENV.dev;
  if (env.indexOf("dev") !== -1) return ENV.dev;
  if (env.indexOf("staging") !== -1) return ENV.staging;
  if (env.indexOf("prod") !== -1) return ENV.prod;
}

export default getEnvVars(Constants.manifest.releaseChannel);
