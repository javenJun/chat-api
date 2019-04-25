import * as moment from 'moment';
module.exports = (app: any) => {
    const { STRING, INTEGER, NOW } = app.Sequelize;
    const User = app.model.define('user',
    {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        nikename: { type: STRING(30) , description: '昵称' },
        firstname: { type: STRING(30), description: '姓' },
        lastname: { type: STRING(30), description: '名' },
        username: { type: STRING(30), description: '真实姓名' },
        phonenumber:  { type: STRING(15), description: '电话号码' },
        password: { type: STRING(200), description: '密码' },
        wxopenid:  { type: STRING(300), description: '微信的openid' },
        salt: { type: STRING(10), description: '加盐' },
        email: { type: STRING(100), validate: { isEmail: true }, description: '邮箱' },
        gender: { type: INTEGER(1), validate: {  isIn: [[ 0, 1, 2 ]] } , defaultValue: 0 , description: '性别: 0:未知,1:男,2:女' } ,
        status: { type: INTEGER(1), defaultValue: 1, validate: {  isIn: [[ 0, 1 ]] }, description: '用户状态 0:禁用用户,1:正常用户' },
        create_at: { type: INTEGER(11), defaultValue: moment(NOW).unix() },
        update_at: { type: INTEGER(11) },
    },
    );
    return User;
};
