import test from '@playwright/test'

import logData from '../../../Data/LT_Login.json'

//for(let login of logData){

let login=logData[0]

test(`Json File  ${login.TestID}`,async({page})=>{ 
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill(login.username)
await page.locator("#password").fill(login.Password)
await page.locator(".decorativeSubmit").click()
await page.locator(`text='CRM/SFA'`).click()
  
})
//}

//Json File Tc001, Json File Tc002