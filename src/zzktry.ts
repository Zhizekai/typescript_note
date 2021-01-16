console.log("ddddd");


let arr222: string[] = ["11", "222", "eee"];
console.log(arr222);
console.log(arr222);
let arr22: Array<number> = [1, 23, 4];
console.log(arr222);


//枚举类型
// enum Flag {success = 1, error = 2}
//
// let s: Flag = Flag.success;
// console.log(s);

enum Err {'undefined1'=-1,'null1'=-2,'success1'=1};


var e:Err=Err.undefined1;

console.log(e);

var num:any=123;

num='str';

num=true;

console.log(num)

// void类型 :typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
// never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。这意味着声明never的变量只能被never类型所赋值。
var a: never;

//    a=123; //错误的写法
a = (() => {
    throw new Error('错误');
})();