"use strict";
function func(num, str) {
    return num + str;
}
func(123, 'str');
function func2(num1, num2) {
    return num1 + num2;
}
func2(123, 123);
function func3(num1, num2) {
    return num1 + Number(num2);
}
func3(123, '123');
function func4(num1, num2) {
    console.log(num1 + num2);
}
func4(123, '123');
var func5 = function (str1, str2) {
    return str1 + ' ' + str2;
};
func5('hello', 'world');
var func6 = function (obj) {
    return obj.str1 + ' ' + obj.str2;
};
func6({ str1: 'hello', str2: 'world' });
//# sourceMappingURL=function.js.map