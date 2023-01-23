const mongoose = require('mongoose');
require('dotenv').config();

/**
 * Make connection with the mongodb database by getting the host and DB name
 * from environment variables
 */
const connectToMongoDb = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDb..'))
    .catch((error) => {
      console.log('Error in connecting to mongoDB ' + error);
      throw error;
    });
};

module.export = connectToMongoDb;
