var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WrapperMethod = /** @class */ (function () {
    function WrapperMethod() {
    }
    WrapperMethod.prototype.loadApplication = function () {
        console.log("Launch Browser and Load Url");
    };
    WrapperMethod.prototype.alertPageNo = function () {
        console.log("Handle all the alert");
    };
    return WrapperMethod;
}());
//create object for abstract class -> we cannot create object for abtract class
//let ab=new WrapperMethod()
var Run = /** @class */ (function (_super) {
    __extends(Run, _super);
    function Run() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Run.prototype.snap = function () {
        console.log("take snap");
    };
    Run.prototype.video = function () {
        console.log("Take Video");
    };
    return Run;
}(WrapperMethod));
var r = new Run();
r.loadApplication();
r.alertPageNo();
r.snap();
r.video();
