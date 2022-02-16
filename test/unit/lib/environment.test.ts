import { loadEnvironment } from '../../../src/lib/environment';

test('should load environment', () => {
  const env = {
    PORT: 1,
    NODE_ENV: 'node-env',
    RUNTIME_ENV: 'runtime-env',
    npm_package_name: 'name',
    npm_package_version: 'version',
  } as any;

  const result = loadEnvironment(env);
  expect(result).toEqual({
    PORT: 1,
    NODE_ENV: 'node-env',
    RUNTIME_ENV: 'runtime-env',
    PACKAGE_NAME: 'name',
    PACKAGE_VERSION: 'version',
  });
});

test('should load empty environment', () => {
  const env = {} as any;

  const result = loadEnvironment(env);
  expect(result).toEqual({
    PORT: 8000,
    NODE_ENV: 'development',
    RUNTIME_ENV: 'development',
    PACKAGE_NAME: 'unknown',
    PACKAGE_VERSION: 'unknown',
  });
});
