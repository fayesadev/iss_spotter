const { nextISSTimesForMyLocation } = require('./iss_promised');
const printFlyoverTimes = require('./index')

nextISSTimesForMyLocation()
.then((passTimes) => {
  printFlyoverTimes(passTimes);
})
.catch((error) => {
  console.log("It didn't work: ", error.message);
});
