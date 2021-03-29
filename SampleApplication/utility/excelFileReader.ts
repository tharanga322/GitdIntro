
import * as  XLSX from 'xlsx'

export class excelFileReader {


    private num1: number;
    private num2: number;



    public getvalues() {


        const reader = require('xlsx')

        // Reading our test file 
        const file = reader.readFile("utility/data.xlsx")

        //let data = [] 


        const sheets = file.SheetNames

        for (let i = 0; i < sheets.length; i++) {
            const temp = reader.utils.sheet_to_json(
                file.Sheets[file.SheetNames[i]])
            temp.forEach((res) => {

                // console.log(res.num1)
                // console.log(res.num2)

                this.num1 = res.num1;
                this.num2 = res.num2;

               // console.log(res.num1)
               // console.log(res.num1)

               return this.num1;
               return this.num2;

            });


        }


        const x: excelFileReader = new excelFileReader();



        x.getvalues();
        console.log(this.num1)
        console.log(this.num2)






    }
}