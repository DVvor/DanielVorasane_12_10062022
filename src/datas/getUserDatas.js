const userId = 12

// Get user Informations includes: 
// the user id, 
// user information (first name, last name and age), 
// the current day's score (todayScore) and key data (calorie, macronutrient, etc.)
async function getUserInfos() {
  const data = await fetch(`http://localhost:3000/user/${userId}`)
    .then(function (result) {
      if (result.ok) {
        return result.json()
      }
    })
    .catch(function (error) {
      console.log(error)
    })
      // console.log(data.data)
  return (data.data)
}

// Get user Actvities (Kilograms and calories lost per day)
async function getUserActivities() {
  const data = await fetch(`http://localhost:3000/user/${userId}/activity`)
  .then(function (result) {
    if (result.ok) {
      return result.json()
    }
  })
  .catch(function (error) {
    console.log(error)
  })
  // console.log(data.data.sessions)
  return (data).data.sessions
}

//retrieves the average sessions of a user per day. The week starts on Monday.
async function getUserAverageSessions() {
  const data = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
  .then(function (result) {
    if (result.ok) {
      return result.json()
    }
  })
  .catch(function (error) {
    console.log(error)
  })
  // console.log(data.data.sessions)
  return (data.data.sessions)
}

// Retrieves a user's performance (energy, endurance, etc.)
async function getUserPerformance() {
  const data = await fetch(`http://localhost:3000/user/${userId}/performance`)
  .then(function (result) {
    if (result.ok) {
      return result.json()
    }
  })
  .catch(function (error) {
    console.log(error)
  })
  console.log(data.data.data)
  return (data.data.data)
}

export { getUserInfos , getUserActivities, getUserAverageSessions, getUserPerformance} ;
