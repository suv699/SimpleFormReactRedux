export interface IUserData {
  login: String,
  password: String
}

export interface IUserRegistration {
  login: String,
  password: String,
  email?: String
}

export interface IMessage {
  text: String,
  mode: String
}