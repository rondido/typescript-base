interface Animal{
    name:string,
    run():void
}

interface People{
    sayName():string,   
}

class AnyClass {

}

//설계
class Park extends AnyClass implements Animal,People{
    constructor(public name:string,){
      super();
    }
    run(){
      console.log(this.name);
    }
    sayName() {
      return `사람의 이름은 ${this.name}`
    }
}

//내부적인 오타나 다른 문제가 없지만 interface에서 구현한 설계에 맞지 않기 때문에 에러 발생
// class Park implements People{
//     constructor(public name2:string,){}
//   run(){
//     console.log(this.name2);
//   }
// }