"use strict";
exports.__esModule = true;
exports.calculator = void 0;
var protractor_1 = require("protractor");
var calculator = /** @class */ (function () {
    function calculator() {
        this.firstEditBox = protractor_1.element(protractor_1.by.model('first'));
        this.secondEditBox = protractor_1.element(protractor_1.by.model('second'));
        this.go = protractor_1.element(protractor_1.by.id("gobutton"));
        this.getResult = protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)"));
    }
    return calculator;
}());
exports.calculator = calculator;
