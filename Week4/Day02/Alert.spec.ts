//default nature alert in playwright -> auto dismiss -> click cancle button

import test from '@playwright/test'

test("Default Nature of Playwright",async({page})=>{

await page.goto("https://www.leafground.com/alert.xhtml")
await page.locator("//span[text()='Show']").nth(1).click()
await page.waitForTimeout(4000)
})

//page.on -> handle multiple alert present in the test
//page.once -> handle only first alert

test("Handle Alert with Page.Once",async({page})=>{

    //handle alert
    // dialog -> event
    //alertType -> variableName
    page.once('dialog',alertType=>{

       const type= alertType.type()
       console.log(type)

       const msg= alertType.message()
       console.log(msg)

       //action
       alertType.accept()

    })


await page.goto("https://www.leafground.com/alert.xhtml")

await page.locator("//span[text()='Show']").first().click()
await page.waitForTimeout(4000)
await page.locator("//span[text()='Show']").nth(1).click()
await page.waitForTimeout(4000)

})


test("Handle Alert with Page,On",async({page})=>{

page.on('dialog',alertType=>{

       const type= alertType.type()
       console.log(type)

       const msg= alertType.message()
       console.log(msg)
       //action
       if(type==='alert'){
       alertType.accept()
       }else if(type==='confirm'){
        alertType.accept()
       }else if(type==='prompt'){
        alertType.dismiss()
       }
    })
await page.goto("https://www.leafground.com/alert.xhtml")
await page.locator("//span[text()='Show']").first().click()
await page.waitForTimeout(4000)
await page.locator("//span[text()='Show']").nth(1).click()
await page.waitForTimeout(4000)
})

test.only("Sweet Alert",async({page})=>{
await page.goto("https://www.leafground.com/alert.xhtml")
await page.locator("//span[text()='Show']").nth(2).click()
await page.waitForTimeout(3000)
await page.locator("//span[@class='ui-icon ui-icon-closethick']").first().click()
await page.waitForTimeout(3000)


})
