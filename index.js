// Code your solution in this file!

drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function() {
//  [drivers[0], drivers[1]];
return drivers.slice(0, 2)
  
};

const returnLastTwoDrivers = function() {
  const newArray = [drivers[2], drivers[3]];
  return newArray
};


// returnFirstTwoDrivers()