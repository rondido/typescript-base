// super
// 기본 클래스 호출시 사용
// 생정자에서 this 사용 전 호출 해야함

class Animal{
    name :string
    constructor(name:string){
        this.name = name;
    }
    sayName(){
        return`동물의 이름은${this.name}`
    }
    
}

class Person3 extends Animal{
    constructor(name: string){
        super(name)
    }
    sayName(){
        return `${super.sayName()}사람의 이름은${this.name}` //동물의 이름은 park 사람의 이름은 park
    }
}

const person = new Person3('park'); //park이 constructor안으로 들어감

