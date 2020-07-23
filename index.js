function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
};

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

function createFareMultiplier(multiplyValue) {
    return function (value) {
        return multiplyValue * value;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, whichDrivers) {
    return whichDrivers(drivers);
};