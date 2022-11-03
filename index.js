// Code your solution in this file!
function returnFirstTwoDrivers(array) {
  let new_array = [];
  new_array.push(array[0], array[1]);
  return new_array;
}

function returnLastTwoDrivers(array) {
  let new_array = [];
  new_array.push(array[array.length - 2], array[array.length - 1])
  return new_array;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function(integer) {
  return function(multiplier) {
    return integer * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, chooseDriver) {
  return chooseDriver(drivers);
}
