// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = drivers => {
  const firstTwoDrivers = function (arrOfDrivers) {
    return arrOfDrivers.slice(0, 2)
  }
  return firstTwoDrivers(drivers)
}

const returnLastTwoDrivers = drivers => {
  const lastTwoDrivers = function (arrOfDrivers) {
    return arrOfDrivers.slice(-2)
  }
  return lastTwoDrivers(drivers)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
  return function (fare) {
    return fare * int;
  }
}

const fareDoubler = (int) => {
  const fareToDouble = int * 2
  return fareToDouble
}

const fareTripler = (int) => {
  const fareToTriple = int * 3
  return fareToTriple
}

const selectDifferentDrivers = (arrayOfDrivers, func) => {
  return func(arrayOfDrivers)
}

console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))