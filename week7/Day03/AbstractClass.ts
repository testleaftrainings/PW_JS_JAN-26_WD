abstract class WrapperMethod{
loadApplication(){
    console.log("Launch Browser and Load Url")
}
alertPageNo(){
    console.log("Handle all the alert")
}

abstract snap():void
abstract video():void 

}
//create object for abstract class -> we cannot create object for abtract class
//let ab=new WrapperMethod()

class Run extends WrapperMethod {
    snap(){
       console.log("take snap") 
    }
    video(){
       console.log("Take Video")
    }
}
let r= new Run()
r.loadApplication()
r.alertPageNo()
r.snap()
r.video()