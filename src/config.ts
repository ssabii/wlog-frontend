declare global {
  interface Window {
    env?: NodeJS.ProcessEnv;
  }
}

const env = window.env ?? ({} as any as NodeJS.ProcessEnv);

const config = {
  routerBaseName: env.FEATURE_CONTEXT ?? process.env.FEATURE_CONTEXT,
  version: VERSION,
  isSnapping: navigator.userAgent === "ReactSnap",
  oauth: {
    basePath: env.OAUTH_BASE_PATH ?? process.env.OAUTH_BASE_PATH,
    clientId: env.OAUTH_CLIENT_ID ?? process.env.OAUTH_CLIENT_ID,
    clientSecret: env.OAUTH_CLIENT_SECRET ?? process.env.OAUTH_CLIENT_SECRET,
  },
  googleAnalytics: {
    trackingId:
      env.GOOGLE_ANALYTICS_TRACKING_ID ??
      process.env.GOOGLE_ANALYTICS_TRACKING_ID,
  },
};

export default config;
