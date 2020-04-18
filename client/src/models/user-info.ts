export interface IUserData {
  login: String,
  password: String,
  isAuthenticated: boolean,
  email?: String,
  isError?: boolean,
  isErrorText?: String
}