const envs = import.meta.env;

export default {
  apiKey: envs.VITE_API_KEY,
  apiKeyPrivate: envs.VITE_API_KEY_PRIVATE,
  baseApiUrl: envs.VITE_BASE_API_URL
};
