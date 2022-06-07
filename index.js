// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) { //assigned to anonymous function
    return drivers.slice(0, 2) //.slice returns a copy of an array into a new array.
}
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(i){ // invoke
    return function(fare){
        return i * fare 
    }
}

const fareDoubler = createFareMultiplier(2)  //declare a variable with a const and assigned a function returned by createFareMultiplier()
//invoke createFareMultiplier in a way that the new farDoubler() function accepts a fare as its lone argument and doubles it

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, fn){
    return  fn(drivers)
}