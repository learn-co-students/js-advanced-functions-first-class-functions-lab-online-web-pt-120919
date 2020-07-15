function returnFirstTwoDrivers(array){
    const variable = function(){
        return [array[0], array[1]]
    }
    return variable(array)
}

function returnLastTwoDrivers(array){
    const variable = function(){
        return [array[array.length - 2], array[array.length - 1]]
    }
    return variable(array)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(integer){
    const fn = function(fare){
        return fare * integer
    }
    return fn
}

function fareDoubler(fare){
    const double = createFareMultiplier(2)
    return double(fare)
}

function fareTripler(fare){
    const triple = createFareMultiplier(3)
    return triple(fare)
}

function selectDifferentDrivers(array, fn){
    return fn(array)
}