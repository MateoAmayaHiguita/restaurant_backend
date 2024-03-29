require('dotenv').config();
const app = require('./app');
const { db } = require('./database/config');
const associationModel = require('./models/association.models');

//Authentication
db.authenticate()
  .then(() => console.log('Database Authenticated'))
  .catch((error) => console.log(error));

associationModel();

//Synchronization
db.sync()
  .then(() => console.log('Data synced on', Date()))
  .catch((error) => console.log(error));

const port = +process.env.PORT || 3200;
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});

