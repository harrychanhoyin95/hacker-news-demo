import Express from './config/express';
import config from './config/index';

const ExpressServer = new Express();
ExpressServer.init();

ExpressServer.httpServer.listen(process.env.PORT || config.port, () => {
  console.log(`? Server started at PORT 3000 `)
  console.log(
    `? Server ready at http://localhost:${config.port}${ExpressServer.server.graphqlPath}`
  );
})