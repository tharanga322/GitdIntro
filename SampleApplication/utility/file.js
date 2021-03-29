"use strict";
exports.__esModule = true;
exports.file = void 0;
function file() {
    // Requiring the module 
    var reader = require('xlsx');
    // Reading our test file 
    var file = reader.readFile("utility/data.xlsx");
    //let data = [] 
    var sheets = file.SheetNames;
    for (var i = 0; i < sheets.length; i++) {
        var temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
        temp.forEach(function (res) {
            // console.log(res.num1)
            //  console.log(res.num2)
            return res.num1;
            return res.num2;
        });
    }
}
exports.file = file;
