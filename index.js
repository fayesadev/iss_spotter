// Requires and runs our main fetch function
// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP: ", ip);
// });

// fetchCoordsByIP('162.157.129.144', (err, data) => {
//   console.log(err);
//   console.log(data);
// });

// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchISSFlyOverTimes({latitude: 5454, longitude: -342}, (error, data) => {
  if (error) {
    console.log("Whoops! There's an error", error);
    return;
  }
  console.log(data);
});