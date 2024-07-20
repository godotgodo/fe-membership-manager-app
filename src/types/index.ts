/* eslint-disable @typescript-eslint/no-unused-vars */
type Theme = {
  text: string;
  background: string;
  primary: string;
  secondary: string;
};
type ReduxState = {
  data: unknown;
  isLoading: boolean;
  isFetched: boolean;
  error: boolean;
  message?: string;
};
interface ApiResponse {
  data: unknown;
  error?: boolean;
  message?: string;
}
type ReduxAction = {
  type: string;
  payload: unknown;
};
type ErrorThrow = {
  error: boolean;
  message: string;
};
