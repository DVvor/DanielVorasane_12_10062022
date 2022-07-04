// Get user Informations includes: 
// the user id, 
// user information (first name, last name and age), 
// the current day's score (todayScore) and key data (calorie, macronutrient, etc.)

// async function getUserInfos(userId) {
//   const data = await fetch(`http://localhost:3000/user/${userId}`) 
//   .then(function (result) {
//     if (result.ok) {
//       return result.json()
//     }
//   })
//   .catch(function (error) {
//     console.log(error)
//   })
//   // console.log(data.data)
//   return (data.data)
// }

async function getUserInfos(userId) {
  let data = ""
  try {
    let response = await fetch(`http://localhost:3000/user/${userId}`)
    if (response.ok){
      data = await response.json()
      return data.data
    }
  }
  catch (err) {
  console.log(err)
  }
}



// Get user Actvities (Kilograms and calories lost per day)
async function getUserActivities(userId) {
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
  return (data.data.sessions)
}

//retrieves the average sessions of a user per day. The week starts on Monday.
async function getUserAverageSessions(userId) {
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
async function getUserPerformance(userId) {
  const data = await fetch(`http://localhost:3000/user/${userId}/performance`)
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

export { getUserInfos, getUserActivities, getUserAverageSessions, getUserPerformance} ;