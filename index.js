// Return first two drivers of an array
const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2);
};


// Return last two drivers of an array
const returnLastTwoDrivers = function(array) {
    return array.slice(-2);
};


// Create an array containing the two functions above
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];


// This is a higher-order function that takes in one argument, an integer, 
// and returns a function that will multiply a fare for a ride accordingly
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};


// Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
// Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
const fareDoubler = createFareMultiplier(2);


// Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
// Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
const fareTripler = createFareMultiplier(3);


// This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() 
// or returnLastTwoDrivers() function. Based on these two arguments, 
// selectDifferentDrivers() will return either the first two drivers or the last two drivers.
const selectDifferentDrivers = function(drivers, selectedDrivers) {
    return selectedDrivers(drivers);
};




