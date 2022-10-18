
class ReadOnlyClass{
    name : string
    readonly age : number
    constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }
    // setAge(newAge: number){
    //     this.age = newAge
    // } 여기도 에러 발생
}

const r = new ReadOnlyClass('park', 99);

r.name = 'ppp' //너무 쉽게 값을 변경할 수 있다.

//r.age = 30;  readonly가 되면서 에러가 발생