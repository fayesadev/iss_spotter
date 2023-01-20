// Requires and runs our main fetch function
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss')

const printFlyoverTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printFlyoverTimes(passTimes);
});

// const nextISSTimesForMyLocation = function() {
//   fetchMyIP((error, ip) => {
//       if (error) {
//         return console.log("It didn't work!", error);
//       }
//       return fetchCoordsByIP(ip, (error, coordinates) => {
//         if (error) {
//           return console.log("It didn't work!", error);
//         }
//         return fetchISSFlyOverTimes(coordinates, (error, data) => {
//           if (error) {
//             return console.log("It didn't work!", error);
//           }
//           console.log(data)
//         })
//       })
//   })
// };

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP: ", ip);
// });

// const ip = '162.157.129.144';

// fetchCoordsByIP(ip , (error, coordinates) => {
//   if (error) {
//     console.log("Seems there was an error", error);
//   }
//   console.log("Yay it works! Returned coords: ", coordinates);
// });

// const coords = {latitude: 53.544389, longitude: -113.4909267};

// fetchISSFlyOverTimes(coords, (error, data) => {
//   if (error) {
//     console.log("Whoops! There's an error", error);
//     return;
//   }
//   console.log("It worked! ISS Flyover Times: ", data);
// });