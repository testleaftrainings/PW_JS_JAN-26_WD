//class to class -> extends
//class to interface-> implements
var Execute = /** @class */ (function () {
    function Execute() {
    }
    Execute.prototype.loadurl = function () {
        console.log("Loadurl");
    };
    Execute.prototype.fill = function () {
        console.log("Fill");
    };
    Execute.prototype.clear = function () {
        console.log("Clear");
    };
    return Execute;
}());
var a = new Execute();
a.clear();
a.fill();
a.loadurl();
