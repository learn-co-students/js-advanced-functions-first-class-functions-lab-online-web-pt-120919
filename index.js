// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2);
};
//Need help explaining this method underneath about using the Math.max

const returnLastTwoDrivers = function(array) {
    return array.slice(Math.max(array.length - 2));
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function(num) {
        return num * fare;
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

//Need help explaining this method underneath
function selectDifferentDrivers(array, f) {
    return f(array);
};
