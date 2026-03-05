interface data{

    loadurl():void
    fill():void
    clear():void
}

//class to class -> extends
//class to interface-> implements

class Execute implements data{
    loadurl(){
        console.log("Loadurl")
    }
    fill() {
        console.log("Fill")
    }
    clear() {
console.log("Clear") 
   }
    
}

let a=new Execute()
a.clear()
a.fill()
a.loadurl()