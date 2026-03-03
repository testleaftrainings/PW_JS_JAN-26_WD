var Wrapper = /** @class */ (function () {
    function Wrapper() {
    }
    Wrapper.prototype.ElementClick = function (locator, forceClick) {
        if (forceClick === true) {
            console.log("Force click action");
        }
        else {
            console.log("Normal Click action");
        }
    };
    return Wrapper;
}());
var mol = new Wrapper();
mol.ElementClick("#id", true);
