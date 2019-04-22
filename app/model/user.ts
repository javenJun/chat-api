module.exports = app => {
    const { STRING, INTEGER, NOW } = app.Sequelize;
    const User = app.model.define('user', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      nikename: INTEGER,
      phonenumber: STRING(11),
      password: STRING(200),
      createtime: {
        type: INTEGER(11),
        defaultValue: NOW,
      },
      updatetime: INTEGER(11),
    });
    return User;
};
