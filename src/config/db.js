const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config({path: './config/config.env'});

function connectDB() {
  mongoose.connect(process.env.MONGO_CONNECTION_URL,
    {});
  const connection =mongoose.connection;

  mongoose.connection
    .once('open', function () {
      console.log('MongoDB running');
    })
    .on('error', function (err) {
      console.log(err);
    });
}

module.exports=connectDB;
