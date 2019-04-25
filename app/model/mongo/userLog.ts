module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;

    const UserLogSchema = new Schema({
      user_id: { type: ObjectId },
      author_id: { type: ObjectId },
      topic_id: { type: ObjectId },
      reply_id: { type: ObjectId },
      has_read: { type: Boolean, default: false },
      create_at: { type: Date, default: Date.now },
    });

    UserLogSchema.index({ master_id: 1, has_read: -1, create_at: -1 });

    return mongoose.model('UserLog', UserLogSchema);
  };
