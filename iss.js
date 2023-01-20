// Contains most of the logic for fetching data from each API endpoint
const request = require('request');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  // IPv4 in JSON: https://api.ipify.org/?format=json
  request('https://api.ipify.org/?format=json', (error, response, body) => {
    // error can be set if invalid domain, user is offline, etc.
    if (error) {
      return callback(error, null);
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    // if we are able to fetch the data
    const IP = JSON.parse(body).ip;
    return callback(null, IP);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    //Edge Case: error
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    //Edge Case: invalid IP into URL
    if (!data.success) {
      const msg = `Success status: ${data.success}. Server message: ${data.message}`;
      return callback(Error(msg), null);
    }
    //Returning latitude and longitude data
    const latitude = data.latitude;
    const longitude = data.longitude;
    const latLng = {
      latitude,
      longitude
    };
    return callback(null, latLng);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };
