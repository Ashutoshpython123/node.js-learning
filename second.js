const square = (x) => (x*x)
const x = "Hello Ashutosh, welcome to Node js";

class abc{
    constructor(){
        this.name = 'Ashutosh Kumar';
    }
}

// module.exports.square = square;
// module.exports.x = x;
// module.exports.abc = abc
module.exports = {square : square, x : x, abc : abc}