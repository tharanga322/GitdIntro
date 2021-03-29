import * as XLSX from 'xlsx';

export function fileValidator(value: number): number {

    const reader = require('xlsx')
    const file = reader.readFile("utility/data.xlsx")
    const sheets = file.SheetNames

    for (let i = 0; i < sheets.length; i++) {
        const temp = reader.utils.sheet_to_json(
            file.Sheets[file.SheetNames[i]])
        temp.forEach((res) => {
            return res
        })
    }
  

}
