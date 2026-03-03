class Wrapper{

ElementClick(locator:string):void
ElementClick(locator:string,forceClick:boolean):void


ElementClick(locator:string,forceClick?:boolean){

    if(forceClick===true){
        console.log("Force click action")
    }else{
        console.log("Normal Click action")
    }
}

}

let mol=new Wrapper()
mol.ElementClick("#id",true)