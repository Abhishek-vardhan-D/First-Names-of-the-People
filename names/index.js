const peopleName = require("../country/state/city/index");
const getFirstName = require("../utilities/utils/index");
// console.log(fullName);

const getPeopleInCity = (peopleName) => {
  return getFirstName(peopleName);
};
module.exports = getPeopleInCity;
