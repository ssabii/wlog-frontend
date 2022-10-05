declare global {
  interface Window {
    env?: NodeJS.ProcessEnv;
  }
}

const env = window.env ?? ({} as any as NodeJS.ProcessEnv);

const config = {
  routerBaseName: env.FEATURE_CONTEXT ?? process.env.FEATURE_CONTEXT,
  version: VERSION,
  api: {
    basePath: env.API_BASE_PATH ?? process.env.API_BASE_PATH,
  },
};

export default config;
