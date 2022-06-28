const {BadRequestError} = "../Utils/error.js"

function getRandom(min, max) {
  //gets random number between min - max
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

class GiftExchange {
  static pairs(names) {
    var copyNames = [...names];
    var pairs = [];
    if (copyNames.length % 2 != 0) {
      throw new BadRequestError("number of names must be even");
    } else {
      while (copyNames.length != 0) {
        var partner1Idx = getRandom(0, copyNames.length - 1);
        var partner1 = copyNames[partner1Idx];
        copyNames.splice(partner1Idx, 1);

        var partner2Idx = getRandom(0, copyNames.length - 1);
        var partner2 = copyNames[partner2Idx];
        copyNames.splice(partner2Idx, 1);
        pairs.push([partner1, partner2]);
      }
    }
    return pairs;
  }

  static traditional(names){
    var copyNames = [...names];
    console.log("copyNames Array", copyNames);
    copyNames = shuffle(copyNames); //scramble names array 
    console.log("new copyNames Array", copyNames);
    var statements = [];

    for(var i =  0; i < copyNames.length - 1; i++) //starting at the first person i is gives to 2 2 gives to 3 
    {
      statements.push(copyNames[i] + " is giving a gift to " + copyNames[i+1]);
    }

    statements.push(copyNames[copyNames.length-1] + " is giving a gift to " + copyNames[0]);
    return statements; 
  }
}

// var names = ["a", "b", "c", "d"]; // 0 - names.length

// console.log(GiftExchange.pairs(names));
// console.log(GiftExchange.traditional(names))

module.exports = GiftExchange;
