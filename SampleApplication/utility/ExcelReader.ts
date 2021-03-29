
import * as  XLSX from 'xlsx'
import * as path from 'path';


export class ExcelReader{

public  readDataFromExcel():String {
    
    const workBook = XLSX.readFile("utility/data.xlsx");
    const workSheet = workBook.Sheets[workBook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(workSheet,{ 
        blankrows: false,
        defval: ''
    });
    
const values =JSON.stringify(data);
console.log(values);
//console.log(data);
//return data;

//console.log(JSON.parse(values));

//const data1 = JSON.parse(values);
//console.log(data1.num1);
//console.log(data1.num2);



data.map((data, index) => {
   let num1 = data[index,0];
    let num2 = data[index,1];
    console.log(`Num1: ${num1} Num2: ${num2}.`);
  });

  for (let i in data) {
    let temp = [];
    for (let j in data[i]) {
      temp.push(data[i][j]);
    }
    array.push(temp);
  }









return values;

  
}

}

let reader= new ExcelReader();
let excel_data=reader.readDataFromExcel()

