const second = require('./second')


console.log(second.x)
console.log(second.square(2))
//console.log(new second.abc)
obj = new second.abc()
console.log(obj)
console.log(obj.name)


// ### Events Module and EventEmitter Class

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(x1,x2)=>{
    console.log(x1+x2);
})

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(names){
        super();
        this._names = names;
    }
    get names(){
        return this._names
    }
}

let ashu = new Person('Ashutosh');
let mantu = new Person('mantu');
ashu.on('name',()=>{
    console.log("my name is " + ashu.names)
})

mantu.on('name',()=>{
    console.log("my name is " + mantu.names);
});

mantu.emit('name');
ashu.emit('name'); 


// #### ReadLine Module

const readline = require('readline');
const r1 = readline.createInterface({input : process.stdin,
                         output: process.stdout });

let num1 = Math.floor((Math.random()*10) +1);
let num2 = Math.floor((Math.random()*10) +1);
let answer = num1 + num2;

r1.question('what is ${ num1 } + ${ num2 }? \n',
(userInput)=>{
    if(userInput.trim() == answer){
        r1.close();
    }
    else{
        r1.setPrompt('Incorrect prompt\n');
        r1.prompt();
        r1.on('line',(userInput)=>{
            if(userInput.trim() == answer)
               r1.close();
            else{
                r1.setPrompt('Your answer of ${ userInput } is incorrect try again\n ')
                r1.prompt();
            }
        })
    }
});
r1.on('close', ()=>{
    console.log('correct!!!!!!');
})



// #### File System Module
