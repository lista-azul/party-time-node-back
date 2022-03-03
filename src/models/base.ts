import {
    Column, CreatedAt, Default, DeletedAt, IsUUID, Model, PrimaryKey, DataType, Table,
    UpdatedAt
} from 'sequelize-typescript';

@Table
export class BaseModel<T> extends Model<T> {

    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string | undefined;

    @CreatedAt
    creationDate: Date | undefined;

    @UpdatedAt
    updatedOn: Date | undefined;

    @DeletedAt
    deletionDate: Date | undefined;
}
