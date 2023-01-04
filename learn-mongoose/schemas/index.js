const mongoose = require('mongoose');

const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  mongoose.connect('mongodb://*****:*****@localhost:27017/admin', {
    dbName: 'nodejs',
    useNewUrlParser: true,
  }, (error) => {
    if (error) {
      console.log('mongoDB connect error', error);
    } else {
      console.log('mongoDB connect success');
    }
  });
};

mongoose.connection.on('error', (error) => {
  console.error('mongoDB connect error', error);
});
mongoose.connection.on('disconnected', () => {
  console.error('mongoDB disconnected. connection retry...');
  connect();
});

module.exports = connect;