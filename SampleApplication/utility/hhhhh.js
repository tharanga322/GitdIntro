"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hhhhh = void 0;
var hhhhh = /** @class */ (function () {
    function hhhhh() {
    }
    hhhhh.prototype.getvalues = function () {
        var _this = this;
        var reader = require('xlsx');
        // Reading our test file 
        var file = reader.readFile("utility/data.xlsx");
        //let data = [] 
        var sheets = file.SheetNames;
        for (var i = 0; i < sheets.length; i++) {
            var temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
            temp.forEach(function (res) {
                // console.log(res.num1)
                // console.log(res.num2)
                _this.num1 = res.num1;
                _this.num2 = res.num2;
                //  console.log(res.num1)
                //console.log(res.num1)
            });
            return this.num1;
            return this.num2;
        }
        var x = new hhhhh();
        //  x.getvalues();
        console.log(this.num1);
        console.log(this.num2);
    };
    return hhhhh;
}());
exports.hhhhh = hhhhh;
