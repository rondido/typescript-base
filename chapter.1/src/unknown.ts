function func(x: any){
    let v1:any = x;
    let v2:unknown = x;
    let v3:string = x;
    let v4:boolean = x;
    let v5:number = x;
    let v6:string[] = x;
    let v7:{} = x;

}


let num:unknown = 99; //any로 출론

// typeof 를 사용하여 타입이 맞는지 검증한다(타입가드)
if(typeof num === 'string'){
    num.trim() 
}


// function func(x: unknown){
//     let v1:any = x;
//     let v2:unknown = x;
//     let v3:string = x;
//     let v4:boolean = x;
//     let v5:number = x;
//     let v6:string[] = x;
//     let v7:{} = x;
//     //any와 unknown을 제외 나머지는 에러가 발생
// }