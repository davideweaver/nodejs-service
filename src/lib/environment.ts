import { config } from 'dotenv-cra';

export type Environment = {
  PORT: number | string;
  NODE_ENV: string;
  RUNTIME_ENV: string;
  PACKAGE_NAME: string;
  PACKAGE_VERSION: string;
};

export const loadEnvironment = (env: NodeJS.ProcessEnv): Environment => {
  // default env vars (pass these in when running in a real environment)
  // NODE_ENV is either production or development used to enable/disable optimizations
  // RUNTIME_ENV indicates the runtime environment used to load a specific .env file
  env.NODE_ENV = env.NODE_ENV || 'development';
  env.RUNTIME_ENV = env.RUNTIME_ENV || 'development';

  // read env files
  config({ env: env.RUNTIME_ENV });

  // parse values
  return {
    PORT: env.PORT || 8000,
    NODE_ENV: env.NODE_ENV,
    RUNTIME_ENV: env.RUNTIME_ENV,
    PACKAGE_NAME: env.npm_package_name || 'unknown',
    PACKAGE_VERSION: env.npm_package_version || 'unknown',
  };
};

export default loadEnvironment(process.env);
