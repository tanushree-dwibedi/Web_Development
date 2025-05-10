import util from 'util';

const complex = {
    name: "tanysh ree",
    age: 33,
    arr: ['one','two',33],
    address:{
        one: 2,
        two:2
    }
}

const output = util.inspect(complex,{
    showHidden : false,
    depth: null,
    color: true
})
console.log(output);