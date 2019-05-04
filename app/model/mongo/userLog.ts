// module.exports = app => {
//     const mongoose = app.mongoose;
//     const Schema = mongoose.Schema;
//     const ObjectId = Schema.ObjectId;

//     const UserLogSchema = new Schema({
//       userid: { type: ObjectId },
//       create_at: { type: Date, default: Date.now },
//     });

//     UserLogSchema.index({ master_id: 1, has_read: -1, create_at: -1 });

//     return mongoose.model('UserLog', UserLogSchema);
//   };
