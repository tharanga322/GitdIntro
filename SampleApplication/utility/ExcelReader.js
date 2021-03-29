"use strict";
exports.__esModule = true;
exports.ExcelReader = void 0;
var XLSX = require("xlsx");
var ExcelReader = /** @class */ (function () {
    function ExcelReader() {
    }
    ExcelReader.prototype.readDataFromExcel = function () {
        var workBook = XLSX.readFile("utility/data.xlsx");
        var workSheet = workBook.Sheets[workBook.SheetNames[0]];
        var data = XLSX.utils.sheet_to_json(workSheet, {
            blankrows: false,
            defval: ''
        });
        var values = JSON.stringify(data);
        console.log(values);
        //console.log(data);
        //return data;
        //console.log(JSON.parse(values));
        //const data1 = JSON.parse(values);
        //console.log(data1.num1);
        //console.log(data1.num2);
        data.map(function (data, index) {
            var num1 = data[index, 0];
            var num2 = data[index, 1];
            console.log("Num1: " + num1 + " Num2: " + num2 + ".");
        });
        return values;
    };
    return ExcelReader;
}());
exports.ExcelReader = ExcelReader;
var reader = new ExcelReader();
var excel_data = reader.readDataFromExcel();
