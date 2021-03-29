import * as XLSX from 'xlsx';
import * as path from 'path';
import { browser, by, element, ElementFinder } from 'protractor';


export class ReadExcel {


    
    
  

    public static readDataFromExcel(pathFromSrcDir, sheetName?) {

        const reader = require('xlsx') 
        const workBook = XLSX.readFile("data.xlsx");
       // const workSheet = sheetName ? workBook.Sheets[sheetName] : workBook.Sheets[workBook.SheetNames[0]];
      
const workSheet =workBook.SheetNames;
            let data = [] 
  
            for(let i = 0; i < workSheet.length; i++) 
            { 
               const temp = reader.utils.sheet_to_json( 
                workBook.Sheets[workSheet[i]]) 
               temp.forEach((res:any) => { 
                  data.push(res) 
               }) 
            } 

            console.log(data)









            
        }
     
    }

    







