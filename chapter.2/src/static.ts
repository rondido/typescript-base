class StaticClass{
    private static type = 'type'
    //static name = 'name'  static 이름이 충돌한다.

    static getType(){
        return StaticClass.type
    }
}

//StaticClass.type  static을 사용함으로써 type에 접근 가능 private으로 변경 시 접근 불가능
StaticClass.getType() // 접근가능
//StaticClass.test()  static으로 메서드도 접근 가능

