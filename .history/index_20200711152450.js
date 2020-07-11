const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function(int) {
    return num * int
  }
}

function fareDoubler(number) {
  return createFareMultiplier(number)(2)
}

function fareTripler(int) {
  return createFareMultiplier(3)
}