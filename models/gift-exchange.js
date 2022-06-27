function getRandom(min, max) {
  //gets random number between min - max
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class GiftExchange {
  static randomizer(names) {
    var copyNames = [...names];
    var pairs = [];

    if (copyNames.length % 2 != 0) {
      throw new Error("number of names cannot be odd");
    } else {
      while (copyNames.length != 0) {
        var partner1Idx = getRandom(0, copyNames.length - 1);
        var partner1 = copyNames[partner1Idx];
        copyNames.splice(partner1Idx, 1);

        var partner2Idx = getRandom(0, copyNames.length - 1);
        var partner2 = copyNames[partner2Idx];
        copyNames.splice(partner2Idx, 1);

        console.log(partner1Idx, partner2Idx);
        pairs.push([partner1, partner2]);
      }
    }
    return pairs;
  }
}

var names = ["a", "b", "c", "d"]; // 0 - names.length

console.log(GiftExchange.randomizer(names));

module.exports = GiftExchange;
