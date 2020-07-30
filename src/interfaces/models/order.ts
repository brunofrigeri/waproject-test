import IUser from './user';

export default interface IOrder {
  id?: number;
  description: string;
  quantity: number;
  value: number;
  userId: number;

  firstName: Pick<IUser, 'firstName'>;
  lastName: Pick<IUser, 'lastName'>;
  roles: Pick<IUser, 'roles'>;

  createdDate?: Date;
  updatedDate?: Date;
}
