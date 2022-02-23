import Express from 'express';

import environment from './lib/environment';

const app = Express();

app.get('/', (req, res) => {
  res.send({
    name: environment.PACKAGE_NAME,
    version: environment.PACKAGE_VERSION,
    node: environment.NODE_ENV,
    runtime: environment.RUNTIME_ENV,
    port: environment.PORT,
  });
});

app.listen(environment.PORT, function () {
  console.log(`Listening on port: ${environment.PORT}`);
});
