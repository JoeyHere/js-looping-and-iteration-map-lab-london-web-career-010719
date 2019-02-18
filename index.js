function  lowerCaseDrivers(array) {
  return array.map(function(driver) {return driver.toLowerCase();});
}

function  nameToAttributes(array) {
  return array.map(function(name) {
    return {firstName: name.split(' ')[0], lastName: name.split(' ')[1]};})
}

function attributesToPhrase(array) {
  return array.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
