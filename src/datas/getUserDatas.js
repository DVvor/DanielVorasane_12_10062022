// Get user Informations includes: 
// the user id, 
// user information (first name, last name and age), 
// the current day's score (todayScore) and key data (calorie, macronutrient, etc.)
async function getUserInfos(userId) {
  let data = ""
  try {
    let response = await fetch(`http://localhost:3000/user/${userId}`)
    // console.log(response)
    if (response.ok){
      data = await response.json()
      return data.data
    } else {
      throw new Error()
    }
  }
  catch (error) {
    // console.log(error)
    
    return "Error: no data found"
  }
}

// Get user Actvities (Kilograms and calories lost per day)
async function getUserActivities(userId) {
  let data = ""
  try {
    let response = await fetch(`http://localhost:3000/user/${userId}/activity`)
    if (response.ok){
      data = await response.json()
      return data.data.sessions
    } else {
      throw new Error()
    }
  }
  catch (error) {
    // console.log(error)
    return "Error: no data found"
  }
}

//retrieves the average sessions of a user per day. The week starts on Monday.
async function getUserAverageSessions(userId) {
  let data = ""
  try {
    let response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    if (response.ok){
      data = await response.json()
      return data.data.sessions
    } else {
      throw new Error()
    }
  }
  catch (error) {
    // console.log(error)
    return "Error: no data found"
  }
}

// Retrieves a user's performance (energy, endurance, etc.)
async function getUserPerformance(userId) {
  let data = ""
  try {
    let response = await fetch(`http://localhost:3000/user/${userId}/performance`)
    if (response.ok){
      data = await response.json()
      return data.data
    } else {
      throw new Error()
    }
  }
  catch (error) {
    // console.log(error)
    return "Error: no data found"
  }
}

export { getUserInfos, getUserActivities, getUserAverageSessions, getUserPerformance} ;