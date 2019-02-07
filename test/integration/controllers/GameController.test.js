const session = require('supertest-session');

describe('GameController', function () {

  let testSession;

  describe('Player is playing in a game', function () {
    beforeEach(function (done) {
      testSession = session(sails.hooks.http.app);

      testSession
        .post('/player')
        .send({name: 'someName', gameId: '542c2b97bac0595474108b48'})
        .expect(200, done);
    });

    it('should return 403 Forbidden', function (done) {
      testSession
        .post('/game')
        .expect(403, done);
    });
  });
});
