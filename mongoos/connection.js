var mongoose = require("mongoose");
var mongoURI = "mongodb://test:test@ds040167.mlab.com:40167/databasetest";
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI,{useMongoClient:true});


mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + mongoURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});