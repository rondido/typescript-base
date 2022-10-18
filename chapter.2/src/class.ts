
class Person {
    //필드
    // -일종의 속성
    // - public 으로 사용 가능.
    
    name : string;
    age : number;
    readonly location:string ='Korea'
    //생성자
    //초기화 담당
    constructor(name: string ,age: number){
        this.name = name;
        this.age = age;
    }

    // 메서드
    // 객체(클래스)는 행동을 뜻함.
    introduce(): string{
        return `${this.name}의 나이는 ${this.age}`
    }
}

//클래스를 인스턴스화
//교유한 메모리를 가지고 있는 클래스로부터 파생된 것
// 실제로 생성된 후 메모리에 올라간다.
const p1 = new Person('park',123);
const p2 = new Person('Poco',100);

console.log(p1.introduce());

console.log(p2.introduce());