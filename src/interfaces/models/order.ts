import IUser from './user';

export default interface IOrder {
  id?: number;
  description: string;
  quantity: number;
  value: number;

  user: IUser;

  createdDate?: Date;
  updatedDate?: Date;
}
