import * as XLSX from 'xlsx';



// Requiring the module 
const reader = require('xlsx')

// Reading our test file 
const file = reader.readFile("utility/data.xlsx")

//let data = [] 


const sheets = file.SheetNames

for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
    temp.forEach((res) => {

        console.log(res.num1)
        console.log(res.num2)

    })


}


