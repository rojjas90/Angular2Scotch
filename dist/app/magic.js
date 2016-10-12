var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'whats up'; }
        return message + ' something';
    };
    return Greeter;
}());
var gretter = new Greeter();
gretter.saySomething('hello');
//# sourceMappingURL=magic.js.map