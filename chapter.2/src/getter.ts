//gette & setter

// 필드에 접근할 권한을 가진 제어자
// getter O / setter X => 속성은 자동으로 읽기 전용
// setter 매개변수의 타입 X / getter의 반환 타입에서 추론

// private 속성은 .연산자로 접근할 수 있다.



class Person1 {
    name: string;
    private _age: number;


    constructor(name: string, age: number){
        this.name = name;
        this._age = age;
    }

    get age(){
        if(this._age === 0){
            return'설정되지 않았습니다.'
        }
        return `나이는 ${this._age}세로 추정`
    }
    set age(age){
        if(typeof age === 'number'){
        this._age = age

        }
        this._age = 0
    }
}


const p3 = new Person1('park',123);
console.log(p3.age); //private이라서 볼 수가 업다
console.log(p3.name);