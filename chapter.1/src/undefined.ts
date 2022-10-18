
const nu: null =null;

const un : undefined = undefined;


console.log( nu == un) //true
console.log( nu === un) //false


function sayHello(word: string){
    if(word === 'world'){
        return 'hello' + word
    }
    return null
} // string || null을 알아서 추론함.. null이 아닌경우는 undefined로 추론


function log(message: string | number){
    console.log(message);
    return undefined;
} //아무것도없다면 void | return undefined
