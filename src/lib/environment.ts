import { config } from 'dotenv-cra';

export type Environment = {
  PORT: number | string;
  NODE_ENV: string;
  RUNTIME_ENV: string;
  PACKAGE_NAME: string;
  PACKAGE_VERSION: string;
};

export interface IRawEnvironment extends NodeJS.ProcessEnv {
  NODE_ENV: string;
  RUNTIME_ENV: string;
}

export const prepareEnvironment = (): IRawEnvironment => {
  // default env vars (pass these in when running in a real environment)
  // NODE_ENV is either production or development used to enable/disable optimizations
  // RUNTIME_ENV indicates the runtime environment used to load a specific .env file
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  process.env.RUNTIME_ENV = process.env.RUNTIME_ENV || 'development';

  // read env files
  config({ env: process.env.RUNTIME_ENV });

  return process.env as IRawEnvironment;
};

export const parseEnvironment = (env: IRawEnvironment): Environment => {
  return {
    PORT: env.PORT || 8000,
    NODE_ENV: env.NODE_ENV,
    RUNTIME_ENV: env.RUNTIME_ENV,
    PACKAGE_NAME: env.npm_package_name || 'unknown',
    PACKAGE_VERSION: env.npm_package_version || 'unknown',
  };
};

export const getEnvironment = (): Environment => {
  const env = prepareEnvironment();
  return parseEnvironment(env);
};

export default getEnvironment();
