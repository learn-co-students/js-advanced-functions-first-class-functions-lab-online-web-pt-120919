// Code your solution in this file!
const returnFirstTwoDrivers = function(array){

    const names = array.slice(0, 2);
    return names
    
}

const returnLastTwoDrivers = function(array){
    const lastNames = array.slice(Math.max(array.length - 2, 0))
    return lastNames
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fare){
     return function(num){
        return num * fare
    }
    
}

const fareDoubler = function(fare){
    return fare * 2 
}

const fareTripler = function(fare){
    return fare * 3
}

const selectDifferentDrivers = (arrayOfDrivers, myfunction)=>{
  return  myfunction(arrayOfDrivers)
}
