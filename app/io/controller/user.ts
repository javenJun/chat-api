// import { Controller } from 'egg';

// export default class UserController extends Controller {
//     async exchange() {
//         const { ctx, app } = this;
//         const nsp = app.io.of('/');
//         const message = ctx.args[0] || {};
//         const socket = ctx.socket;
//         const client = socket.id;
//         try {
//           const { target, payload } = message;
//           if (!target) return;
//           const msg = ctx.helper.parseMsg('exchange', payload, { client, target });
//           nsp.emit(target, msg);
//         } catch (error) {
//           app.logger.error(error);
//         }
//       }
// }
