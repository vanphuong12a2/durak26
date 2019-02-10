const sails = require('sails');

before(function (done) {

  this.timeout(5000);

  sails.lift({
    models: {
      migrate: 'drop'
    }
  }, async (err) => {
    if (err) {
      return done(err);
    }

    await Game.create({id: '542c2b97bac0595474108b48'});

    return done();
  });
});

after(function (done) {
  sails.lower(done);
});
