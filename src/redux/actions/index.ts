import { GET_MESSAGES } from './type';

export const getMessages = (example: IExample) => ({
  type: GET_MESSAGES,
  payload: { example },
});

export interface IExample {
  userId: string;
}
