import { io } from 'socket.io-client';

export default class DataProvider {
  constructor() {
    const _url = 'ws://localhost:3002';
    this.socket = io(_url);
  }

  start(handler) {
    this.socket.on('ticker', function (response) {
      const res = Array.isArray(response) ? response : [response];
      handler(res);
    });
    this.socket.emit('start');
  }

  finish() {
    this.socket.off('disconnect');
  }
}
