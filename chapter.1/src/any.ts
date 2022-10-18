
//tsconfig에서 Noimplicitany 사용을 권장
// 암시적으로 any를 컴퍼일러가 알아 둘 수 있는 상황을 방지
//js 문법이기 때문에 ts에서 추론할 수 없다.
function func(anyParam: any){
    anyParam.trim()
}

func([1,2,3])