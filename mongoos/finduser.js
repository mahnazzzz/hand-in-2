require("./connection");
User = require("./models/user");

// get all the users
User.find({username: 'sevilayha'}, function(err, users) {
    if (err) throw err;
  
    // object of all the users
    console.log(users);
  });

  // get a user with ID of 1
User.findById("5a346684d877340f40b1d95c", function(err, user) {
    if (err) throw err;
  
    // show the one user
    console.log(user);
  });