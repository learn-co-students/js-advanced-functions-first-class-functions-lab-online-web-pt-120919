const returnFirstTwoDrivers  = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers  = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(int2){
        return int * int2
    }
}

const fareDoubler = function(int){
    return createFareMultiplier(int)(2)
}

const fareTripler = function(int){
    return createFareMultiplier(int)(3)
}

function selectDifferentDrivers(drivers, whichTwo) {
    return whichTwo(drivers)
}


