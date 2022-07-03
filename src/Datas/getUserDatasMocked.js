import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./datasMocked"

// Get user Informations includes: 
// the user id, 
// user information (first name, last name and age), 
// the current day's score (todayScore) and key data (calorie, macronutrient, etc.)

// const userId = 12

async function getUserInfos(userId) {
  const data = USER_MAIN_DATA.find((user) => user.id === parseInt(userId))

    // console.log(data)
  return (data)
}

// Get user Actvities (Kilograms and calories lost per day)
async function getUserActivities(userId) {
  const data = USER_ACTIVITY.find((user) => user.userId === parseInt(userId))

//   console.log(data.sessions)
  return (data.sessions)
}
  
//retrieves the average sessions of a user per day. The week starts on Monday.
async function getUserAverageSessions(userId) {
  const data = USER_AVERAGE_SESSIONS.find((user) => user.userId === parseInt(userId))

//   console.log(data.sessions)
  return (data.sessions)
}
  
// Retrieves a user's performance (energy, endurance, etc.)
async function getUserPerformance(userId) {
  const data = USER_PERFORMANCE.find((user) => user.userId === parseInt(userId))

    // console.log(data)
  return (data)
}
  
  export { getUserInfos, getUserActivities, getUserAverageSessions, getUserPerformance} ;

// getUserInfos()
// getUserActivities()
// getUserAverageSessions()
// getUserPerformance()