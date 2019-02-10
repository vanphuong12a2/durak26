import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';

const io = sailsIOClient(socketIOClient);

if (process.env.NODE_ENV !== 'production') {
  io.sails.url = 'http://localhost:1337';
}

const socket = io.socket;

export default socket;
