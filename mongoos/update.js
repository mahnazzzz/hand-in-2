require("./connection");
User = require("./models/user");

User.findById("5a346684d877340f40b1d95c", function(err, user) {
    if (err) throw err;
  
    // change the users location
    user.location = 'uk';
  
    // save the user
    user.save(function(err) {
      if (err) throw err;
  
      console.log('User successfully updated!');
    });
  
  });