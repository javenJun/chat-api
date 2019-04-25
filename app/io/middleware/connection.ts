module.exports = (app: any) => {
  return async (ctx, next) => {
    ctx.socket.emit('res', 'connected!');
    await next();
    console.log('disconnection!');
  };
};
