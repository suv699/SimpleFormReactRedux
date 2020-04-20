export interface IUserData {
  login: String,
  password: String
}

export interface IUserRegistration {
  name: String,
  lastName: String,
  login: String,
  password: String,
  email?: String
}

export interface IMessage {
  message: object
}

export interface IUserData {
  userId: number,
  name: String,
  lastName: String,
  login: String
}