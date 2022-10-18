class People1{
    // public name:string, 
    //     private age:number,
    //     protected gender:'M' | 'F'
    constructor(
        public name:string, 
        private age:number,
        protected gender:'M' | 'F'){
        this.name= name
        this.age =age
        this.gender = gender
    }

    sayName(){
        return `이름 ${this.name} 입니다`
    }
    // 서브 클래스 공유 가능
    protected sayAge(){
        return `나이는 ${this.age}`
    }
    // 자기 자신의 클래스에만 사용 가능
    private sayGender(){
        return ` 성별 타입은 ${this.gender}`
    }
}

class Me1 extends People1{
    constructor(name:string, age:number, gender:'M' | 'F'){
        super(name,age,gender)        
    }

    sayInfo(){
        return `${super.sayName()} ${super.sayAge()} ` //protecd인데 접근 가능 //gender는 접근할 수 없다.
    }
}

const pe = new People1('park', 99 ,'M')


