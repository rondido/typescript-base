abstract class AnimalClass{
    //선언된 메서드
    
    abstract hello() :string
    

    // 구현된 메서드
    run(){
        return this.hello + 'run'
    }
}

// 직접 인스턴스화가 될 수 없다.
//const animal = new AnimalClass()
//파생된 클래스가 되면 인스턴스화 할 수 있다.
class AnimalC1 extends AnimalClass {
    // abstract hello(str: string) :string를 통해 메서드를 강제한다.
    hello(){
        return 'people'
    }
}

class Dog extends Animal{
    hello(){
        return 'Dog'
    }

}

const people = new AnimalC1()
