import { DataType, Table, Column } from 'sequelize-typescript';
const { STRING, SMALLINT } = DataType;
import { BaseWithUUID } from './base';
@Table({ tableName: 'user' })
export class User extends BaseWithUUID {
    @Column({
        type: STRING(255),
        comment: '昵称',
    })
    openid: string;

    @Column({
        type: STRING(30),
        comment: '昵称',
    })
    nikename: string;

    @Column({
        type: STRING(30),
        comment: '姓',
    })
    firstname: string;

    @Column({
        type: STRING(30),
        comment: '名',
    })
    lastname: string;

    @Column({
        type: STRING(30),
        comment: '姓名',
    })
    username: string;

    @Column({
        type: STRING(11),
        comment: '手机电话号码',
    })
    phonenumber: string;

    @Column({
        type: STRING(11),
        comment: '手机电话号码',
    })
    password: string;

    @Column({
        type: STRING(5),
        comment: '加盐',
    })
    salt: string;

    @Column({
        type: STRING(255),
        comment: '头像',
    })
    avatar: string;
    @Column({
        type: SMALLINT,
        defaultValue: 0,
        comment: '性别: 0:未知,1:男,2:女',
    })
    gender: number;

    @Column({
        type: SMALLINT,
        defaultValue: 0,
        comment: '用户状态 0:禁用用户,1:正常用户,2:封存账户',
    })
    status: number;
}
