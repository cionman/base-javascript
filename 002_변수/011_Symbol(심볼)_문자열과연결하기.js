var sym1 = Symbol.for("club");
var sym2 = Symbol.for("club");
console.log( sym1 == sym2 ); //true

var sym3 = Symbol.for("club");
var sym4 = Symbol("club");
console.log( sym3 == sym4 ); //false
console.log(Symbol.keyFor(sym3)) //club
console.log(Symbol.keyFor(sym4)) //undefined
