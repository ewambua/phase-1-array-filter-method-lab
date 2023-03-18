// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, value) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase() === value.toLowerCase() })
  }

function fuzzyMatch(drivers, value){
    return drivers.filter(function(driver) {
        return driver.toLowerCase().substring(0, value.length) === value.toLowerCase()
    })
}

function matchName(drivers, value){
    return drivers.filter(function(driver) {
        return driver.name === value
    })
}