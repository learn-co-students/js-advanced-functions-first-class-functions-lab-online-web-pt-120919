// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0, 2)
}

const returnLastTwoDrivers = (arr) => {
    return arr.slice(arr.length - 2, arr.length)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return int * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}