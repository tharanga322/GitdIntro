// Requiring the module 
const reader = require('xlsx') 
  
// Reading our test file 
const file = reader.readFile("utility/data.xlsx") 
  
//let data = [] 
  
const sheets = file.SheetNames 
  
for(let i = 0; i < sheets.length; i++) 
{ 
   const temp = reader.utils.sheet_to_json( 
        file.Sheets[file.SheetNames[i]]) 
   temp.forEach((res) => { 
      //data.push(res) 

     // let jsonObj = JSON.parse(data)

      //console.log(jsonObj)

     // let name: string = jsonObj.name
     // let property: string = jsonObj.property
       
      //console.log(name)
      //console.log(property)

      console.log(res.num1)
      console.log(res.num2)
      //console.log(res)

         }) 

         
} 
  
// Printing data 
