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
    baseURL: env.API_BASE_URL ?? process.env.API_BASE_URL,
  },
};

export default config;
