// 상속
// 확장

class 기본{
    result(){
        return 'Base'
    }
}

class 파생 extends  기본{
    result(): string {
        return 'Derived'
    }
}

const de = new 파생();


de.result() //Derived