// Requiring the module 
var reader = require('xlsx');
// Reading our test file 
var file = reader.readFile("utility/data.xlsx");
var data = [];
var sheets = file.SheetNames;
for (var i = 0; i < sheets.length; i++) {
    var temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    temp.forEach(function (res) {
        //data.push(res) 
        // let jsonObj = JSON.parse(data)
        //console.log(jsonObj)
        // let name: string = jsonObj.name
        // let property: string = jsonObj.property
        //console.log(name)
        //console.log(property)
        console.log(res.num1);
        console.log(res.num2);
        //console.log(res)
    });
}
// Printing data 
