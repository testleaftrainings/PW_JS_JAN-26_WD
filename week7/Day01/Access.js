"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data() {
    }
    //public access anywhere
    Data.prototype.add = function (a, b) {
        console.log(a + b);
    };
    //private access inside same class
    Data.prototype.sub = function (a, b) {
        console.log(a - b);
    };
    //protected access inside same class or inhert
    Data.prototype.mul = function (a, b) {
        console.log(a * b);
    };
    //create another public method for using private or protected method
    Data.prototype.sub1 = function () {
        this.sub(10, 5);
        this.mul(2, 20);
    };
    return Data;
}());
exports.Data = Data;
// let access=new Data()
// access.add(7,8)
// access.sub1()
