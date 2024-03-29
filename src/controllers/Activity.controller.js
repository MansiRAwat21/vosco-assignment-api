import httpFormatter from "../utils/Formatter.js"
import { StatusCodes } from "http-status-codes"
import logger from "../config/logger/index.js"


export const Activity = async (req, res) => {
  try {
    const data =[
      {
        "activity": "Play basketball with a group of friends",
        "type": "social",
        "participants": 5,
        "price": 0,
        "link": "",
        "key": "8683473",
        "accessibility": 0.7
      },
      {
        "activity": "Go for a picnic in the park",
        "type": "social",
        "participants": 4,
        "price": 0,
        "link": "",
        "key": "1234567",
        "accessibility": 0.8
      },
      {
        "activity": "Watch a movie marathon at home",
        "type": "leisure",
        "participants": 3,
        "price": 0,
        "link": "",
        "key": "9876543",
        "accessibility": 0.6
      },
      {
        "activity": "Host a game night with board games",
        "type": "social",
        "participants": 6,
        "price": 0,
        "link": "",
        "key": "2468135",
        "accessibility": 0.7
      },
      {
        "activity": "Cook a potluck dinner with friends",
        "type": "social",
        "participants": 8,
        "price": 0,
        "link": "",
        "key": "1357924",
        "accessibility": 0.9
      },
      {
        "activity": "Go for a hike in the mountains",
        "type": "physical",
        "participants": 3,
        "price": 0,
        "link": "",
        "key": "5555555",
        "accessibility": 0.6
      },
      {
        "activity": "Attend a local community event",
        "type": "social",
        "participants": 10,
        "price": 0,
        "link": "",
        "key": "7777777",
        "accessibility": 0.8
      },
      {
        "activity": "Visit an art gallery or museum",
        "type": "cultural",
        "participants": 2,
        "price": 0,
        "link": "",
        "key": "8888888",
        "accessibility": 0.7
      },
      {
        "activity": "Have a karaoke night with friends",
        "type": "social",
        "participants": 4,
        "price": 0,
        "link": "",
        "key": "9999999",
        "accessibility": 0.8
      },
      {
        "activity": "Organize a themed costume party",
        "type": "social",
        "participants": 15,
        "price": 0,
        "link": "",
        "key": "1010101",
        "accessibility": 0.7
      }
    ]
    
    return res
      .status(StatusCodes.OK)
      .json(httpFormatter(data, "Getting Data Successfully"))
  }
  catch (error) {
    console.log(error.message)
    logger.error(error)

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(httpFormatter(error.message, "Something went wrong!", false))
  }
}
