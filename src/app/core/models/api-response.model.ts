export interface Error {
  code: number;
  message: string;
}

export interface ApiResponse<T> {
  body: T;
  error: Error;
}
