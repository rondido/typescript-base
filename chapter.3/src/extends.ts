interface We{
    name:string,
    run():string
}

// 충돌해선 안된다...
interface Me extends  We{
    //name :number,
    sayName():string
}



const kim:Me = {
    name:'park',
    run(){
        return'string'
    },
    sayName() {
    return 'string2'        
    },
}