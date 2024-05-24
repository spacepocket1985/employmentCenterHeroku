const { app, port } = require('./app');
const { startDB } = require('./utils/startDB');

const startApp = async (): Promise<void> => {
  await startDB();

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });
};

startApp();
