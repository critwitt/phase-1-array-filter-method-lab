// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (drivers, str) {
    return drivers.filter(match => match.toLowerCase() === str.toLowerCase())
}

findMatching(drivers, "bobby");

function fuzzyMatch (drivers, str) {
    return drivers.filter(letters => letters.indexOf(str) === 0)
}

fuzzyMatch(drivers, "Sa")

function matchName (drivers, str) {
    return drivers.filter(names => names.name === str)
}