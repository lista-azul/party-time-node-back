import {AllowNull, Column, DataType, Table} from 'sequelize-typescript';
import { BaseModel } from './base';

@Table
export class Event extends BaseModel<Event> {

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string | undefined;

    @AllowNull(false)
    @Column(DataType.STRING)
    title: string | undefined;

    @AllowNull(false)
    @Column(DataType.STRING)
    description: string | undefined;

    @AllowNull(false)
    @Column(DataType.STRING)
    type: string | undefined;

    @AllowNull(false)
    @Column(DataType.DATE)
    date: Date | undefined;

    @AllowNull(false)
    @Column(DataType.STRING)
    location: string | undefined;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    price: number | undefined;
}
