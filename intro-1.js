const victor = "Victor";
const names = require('./name-3');
const sayHi = require('./util')
const mySample = require('./test')
require('./sum');

console.log(mySample);
console.log(names);
sayHi(names.charles);
sayHi(names.ubo);
sayHi(names.victor);

console.log(`${items[0]} is for ${persons.name1}`)






//fs module
const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }else{
        const first = result
        readFile('./content/second.txt','utf8',(err,result)=>{
            if(err){
                console.log(err)
                return
            }else{
                const second = result
                writeFile('./content/result-async.txt',`Here is the result:${first}, ${second}`,(err,result)=>{
                    if (err){
                    console.log(err)
                    return
                    }
                    else{
                        console.log(result)
                    }
                })
            }
        })

    }
})

