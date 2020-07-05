const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0 ,2)
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
  return function(int) {
    return int * fare
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, driverFn) {
  return driverFn(arr)
} 