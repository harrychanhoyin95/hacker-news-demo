import Express from './config/express';
import config from './config/index';

const ExpressServer = new Express();
const portNumber = process.env.PORT || config.port

ExpressServer.init();
ExpressServer.httpServer.listen(portNumber, () => {
  console.log(`🚀 Server started at PORT ${portNumber} `)
  console.log(
    `🚀 Server ready at http://localhost:${portNumber}${ExpressServer.server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${portNumber}${ExpressServer.server.subscriptionsPath}`
  );
})