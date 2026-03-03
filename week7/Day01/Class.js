"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var Browser = /** @class */ (function () {
    // constructor(){
    // console.log("Default constructor")
    // }
    function Browser(app) {
        this.browserName = 'Chrome';
        this.app = app;
        //this.app='leaftaps'
        console.log(this.app);
    }
    Browser.prototype.loadUrl = function () {
        console.log("Url Loaded");
    };
    return Browser;
}());
exports.Browser = Browser;
// let obj=new Browser("leaftaps")
// //objectName.method()
// //objectName.property
// obj.loadUrl()
// console.log(obj.browserName)
