// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
  return array.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(Int) {
  function multiplyFare(multiplier) {
    return Int * multiplier
  }
  return multiplyFare
}

const fareDoubler = function(fare) {
  return createFareMultiplier(fare)(2)
}

const fareTripler = function(fare) {
  return createFareMultiplier(fare)(3)
}

const selectDifferentDrivers = function(arrayOfDrivers, theFunction) {
  return theFunction(arrayOfDrivers)
}
