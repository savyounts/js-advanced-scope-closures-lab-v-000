function produceDrivingRange(blockRange){
  return function(start, end){
    const tripStart = start.replace('th', '')
    const tripEnd = end.replace('th', '')
    const tripLength = Math.abs(tripStart - tripEnd)
    if (tripLength <= blockRange){
      return `within range by ${blockRange - tripLength}`
    } else {
      return `${tripLength - blockRange} blocks out of range`
    }
  }
}


function produceTipCalculator(percent){
  return function(bill){
    return bill * percent
  }
}


function createDriver(){
  let driverId = 0
  return class{
    constructor(name){
      this.id =  ++driverId
      this.name = name
    }

  }
}
