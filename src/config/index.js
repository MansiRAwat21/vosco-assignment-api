import { config } from "dotenv"

config()

const {
  APP_NAME,
  PORT,
  NODE_ENV,
  CORS_ORIGIN,
  OT_LOGIN
} = process.env

const Config = {
  APP_NAME,
  PORT,
  NODE_ENV,
  CORS_ORIGIN,
  OT_LOGIN
}

export default Config
