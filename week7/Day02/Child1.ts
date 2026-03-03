import { ParentMethod } from "./Parent";

class ChildMethod1 extends ParentMethod{

createAccount(){
    console.log("Account")
}

}
let ch1=new ChildMethod1()
ch1.launchBrowser()
ch1.loadurl()
ch1.loginInfo()
ch1.createAccount()