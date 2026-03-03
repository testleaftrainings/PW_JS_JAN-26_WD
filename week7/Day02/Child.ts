import { ParentMethod } from "./Parent";

class ChildMethod extends ParentMethod{


createLead(){
    console.log("Create Lead")
}

title(){
    console.log("Child title")
    //super keyword -> access your parent data
    super.title()
}
}

let ch=new ChildMethod()
ch.launchBrowser()
ch.loadurl()
ch.loginInfo()
ch.createLead()
ch.title()