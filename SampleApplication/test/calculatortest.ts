import { browser } from "protractor";
import { element, by } from "protractor";
import { calculator } from "../pages/Calculator";
import { config } from "../utility/configuration";
import {ExcelReader} from "../utility/ExcelReader";
    

describe('Chain locat ors demo', () => {


    it('Open Angular js website', async () => {

        let calc = new calculator();
        
        let baseUrl = config.baseUrl;

        // await browser.get('http://juliemr.github.io/protractor-demo/');
        await browser.get(baseUrl);
        //repeater ,  chain locators, And css for identical tags
       
        let reader= new ExcelReader();
       // let excel_data=reader.readDataFromExcel();
       
       
        await calc.firstEditBox.sendKeys(reader.readDataFromExcel().valueOf[0]);
        await calc.secondEditBox.sendKeys();
        await calc.go.click();
      



    });


});

