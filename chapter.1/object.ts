// any와 다를게 없는 상황
//더 자세히 요사해주어야함 다양한 형태로 만들어 질 수 있기 때문에
const obj: object = {
    str : 'str',
    num :123,
    child:{
        str: 'str',
        num : 123,
    }
}


const obj2: {
    str:string, 
    num:number, 
    child:{
    str: string,
    num: number

}} = {
    str : 'str',
    num :123,
    child:{
        str:'str',
        num :123,
    }

}

console.log(obj2.str);