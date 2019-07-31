import { Model, DataType, Column, CreatedAt, UpdatedAt } from 'sequelize-typescript';
const { UUIDV4 } = DataType;
export abstract class Base extends Model<Base> {
    @Column({
        comment: '创建时间',
    })
    @CreatedAt
    createTime?: Date;

    @Column({
        comment: '创建人',
    })
    creator?: string;

    @Column({
        comment: '更新时间',
    })
    @UpdatedAt
    updateTime?: Date;

    @Column({
        comment: '更新人',
    })
    updator?: string;
}

export abstract class BaseWithDeletion extends Base {

    @Column({ defaultValue: false })
    deleted?: boolean;
}

/**
 * 带自增id的实体基类
 */
export abstract class BaseWithId extends BaseWithDeletion {
    /**
     * 自增id
     */
    @Column({
        primaryKey: true,
        autoIncrement: true,
        comment: '自增id',
      })
    id: number;
}

/**
 * 带UUID的实体基类
 */

export abstract class BaseWithUUID extends BaseWithDeletion {
    @Column({
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
        comment: 'uuid',
    })
    id: string;
 }

 /**
  * 带userid的实体自增id基类
  */

export abstract class BaseWithIdAndUserId extends BaseWithId {
    @Column({
        allowNull: false,
        comment: '用户组件id',
    })
    userid?: string;
 }


/**
 *  带userid的实体基类
 */

export abstract class BaseWithUUIDAndUserId extends BaseWithUUID {
    @Column({
        allowNull: false,
        comment: '用户组件id',
    })
    userid?: string;
 }
