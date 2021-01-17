/**
 * 迭代器
 *
 *  概念： iterator是一种接口机制，为各种不同的数据结构提供统一的访问机制
 作用：
 1、为各种数据结构，提供一个统一的、简便的访问接口；
 2、使得数据结构的成员能够按某种次序排列
 3、ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。
 工作原理：
 - 创建一个指针对象(遍历器对象)，指向数据结构的起始位置。
 - 第一次调用next方法，指针自动指向数据结构的第一个成员
 - 接下来不断调用next方法，指针会一直往后移动，直到指向最后一个成员
 - 每调用next方法返回的是一个包含value和done的对象，{value: 当前成员的值,done: 布尔值}
 * value表示当前成员的值，done对应的布尔值表示当前的数据的结构是否遍历结束。
 * 当遍历结束的时候返回的value值是undefined，done值为false
 原生具备iterator接口的数据(可用for of遍历)
 1、Array
 2、arguments
 3、set容器
 4、map容器
 5、String
 。。。
 */

// const xiyou:string[] = ["ts",'suk','zbj','shaseng'];
//
// //遍历的key
// for (let v in xiyou) {
//     console.log(v);
// }
//
//
// // 遍历的key 值也就是value
// for (let v of xiyou){
//     console.log(v);
// }
//
// // @ts-ignore
// let iterator:any = xiyou[Symbol.iterator]();
// console.log(iterator.next());
// @ts-ignore
//生成迭代器对象
function* gen(): any {
    console.log("hello generator11111");
    yield console.log("111111");
    console.log("hello generator22222222");
    yield "222222";
    console.log("hello generator33333333333");
    yield "333333";
}

// let ite = gen();
// console.log(ite);
// // @ts-ignore
// ite.next();
// @ts-ignore
// ite.next();
// ite.next();
console.log(gen());
for (let v of gen()) {
    console.log(v);
}

function* generatorFunction() {
    console.log('开始执行');
    yield 'Hello, ';

    console.log('暂停后再次执行');
    yield 'World!';
}

let iterator = generatorFunction();
console.log(iterator);

function* infiniteList() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const iterator1: any = infiniteList();
// let i:number = 0;
// while(i<100){
//     // console.log(iterator1.next()); //{ value: xxxx, done: false }
//     // @ts-ignore
//     setTimeout(()=>{console.log(iterator1.next())},3000);
//     i++;
// }

// setInterval(() => {
//     console.log(iterator1.next());
// },3000)
//
// function foo() {
//     return new Promise((resolve, reject) => {
//         try {
//             setTimeout(() => {
//                 resolve("success");
//             }, 1000)
//             ;    // 成功
//         } catch (error) {
//             reject("fail");        // 失败
//         }
//     });
// }

//调用promise 方法
// foo()
//     .then((res) => {
//         console.info(res);       // then - 成功后执行
//     })
//     .catch((err) => {
//         console.error(err);      // catch - 失败后执行
//     });
/***
 * async 和 await的使用
 */
// async function fn() {
//     return new Promise<any>((resolve, reject) => {
//
//         setTimeout( ()=>{resolve({code:200,data:[1,2,3,4]})},1000)
//
//     });
// }
//
// const res = fn();
// res.then(res => {
//     console.log(res);
//     }
// ).catch(err => {
//
//     console.log(err);
// });
// console.log(res);

type restype = {
    code:number,
    data:number[]
}
async function fn2(val:any,id:number) {
    console.log(val,`第${id}次调用本函数`);
    return new Promise<any>((resolve, reject) => {
        setTimeout( ()=>{resolve({code:200,data:[22222,2,3,4]})},1000)
    });
}

async function main1() {
    let result1:restype = await fn2({code:200,data:null},1);
    console.log("1111");
    let result2:restype = await fn2(result1,2);
    console.log("2222");
    let result3:restype = await fn2(result2,3);
    console.log("33333");

    console.log("await",result1);
}

console.log("继续执行");
main1();