const sails = require('sails');

before(function (done) {

  this.timeout(5000);

  sails.lift({
    hooks: {grunt: false},
    log: {level: 'warn'},
  }, (err) => {
    if (err) {
      return done(err);
    }
    return done();
  });
});

after(function (done) {
  sails.lower(done);
});
