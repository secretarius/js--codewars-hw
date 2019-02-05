//Grasshopper - Terminal game combat function
function combat(health, damage) {
    let res = health - damage;
    if (res < 0) {
        return 0;
    } else {
        return res
    }
}
alert(combat(100, 5));
alert(combat(20, 30));

//Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.reduce((a,b)=>Math.min(a, b));

    }

}
var sif = new SmallestIntegerFinder();
alert(sif.findSmallestInt([78, 56, 232, 12, 8]));
alert(sif.findSmallestInt([78, 56, 232, 12, 18]));

//Lost Without a Map
function maps(x) {
    return x.map((a)=>(a * 2));
}

alert(maps([1, 2, 3]))

//Kata: How new Works
myObj = {}
myObj.__proto__ = MyObject.prototype
myObj.constructor(MyObject)

// const factory = function () {
//   this.__proto__ = MyObject.prototype;
//   this.constructor(MyObject);
// };
//  var myObj = new factory();
//factory.call(myObj);


