"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function gen() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("hello generator11111");
                return [4 /*yield*/, console.log("111111")];
            case 1:
                _a.sent();
                console.log("hello generator22222222");
                return [4 /*yield*/, "222222"];
            case 2:
                _a.sent();
                console.log("hello generator33333333333");
                return [4 /*yield*/, "333333"];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
// let ite = gen();
// console.log(ite);
// // @ts-ignore
// ite.next();
// @ts-ignore
// ite.next();
// ite.next();
console.log(gen());
for (var _i = 0, _a = gen(); _i < _a.length; _i++) {
    var v = _a[_i];
    console.log(v);
}
function generatorFunction() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('开始执行');
                return [4 /*yield*/, 'Hello, '];
            case 1:
                _a.sent();
                console.log('暂停后再次执行');
                return [4 /*yield*/, 'World!'];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var iterator = generatorFunction();
console.log(iterator);
function infiniteList() {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 0;
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, i++];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var iterator1 = infiniteList();
function fn2(val, id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log(val, "\u7B2C" + id + "\u6B21\u8C03\u7528\u672C\u51FD\u6570");
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    setTimeout(function () { resolve({ code: 200, data: [22222, 2, 3, 4] }); }, 1000);
                })];
        });
    });
}
function main1() {
    return __awaiter(this, void 0, void 0, function () {
        var result1, result2, result3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fn2({ code: 200, data: null }, 1)];
                case 1:
                    result1 = _a.sent();
                    console.log("1111");
                    return [4 /*yield*/, fn2(result1, 2)];
                case 2:
                    result2 = _a.sent();
                    console.log("2222");
                    return [4 /*yield*/, fn2(result2, 3)];
                case 3:
                    result3 = _a.sent();
                    console.log("33333");
                    console.log("await", result1);
                    return [2 /*return*/];
            }
        });
    });
}
console.log("继续执行");
main1();
