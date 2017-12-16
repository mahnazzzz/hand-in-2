require("./connection");
User = require("./models/user");

// find the user starlord55
// update him to starlord 88
User.findOneAndUpdate({ username: 'sevilayha' }, { username: 'starlord88' }, function(err, user) {
    if (err) throw err;
  
    // we have the updated user returned to us
    console.log(user);
  });

  // find the user with id 4
// update username to starlord 88
User.findByIdAndUpdate("5a34663e4f86c809749a11ba", { username: 'starlord8008' }, function(err, user) {
    if (err) throw err;
  
    // we have the updated user returned to us
    console.log(user);
  });

/*   // get the user starlord55
User.find({ username: 'starlord8008' }, function(err, user) {
    if (err) throw err;
  
    // delete him
    user.remove(function(err) {
      if (err) throw err;
  
      console.log('User successfully deleted!');
    });
  }); */

  // find the user with id 4
User.findOneAndRemove({ username: 'starlord8008' }, function(err) {
    if (err) throw err;
  
    // we have deleted the user
    console.log('User deleted!');
  });
  // find the user with id 4
User.findByIdAndRemove("5a34663e4f86c809749a11ba", function(err) {
    if (err) throw err;
  
    // we have deleted the user
    console.log('User deleted!');
  });