 export class Browser{

browserName:string='Chrome'
app:string

loadUrl(){
console.log("Url Loaded")
}


// constructor(){
// console.log("Default constructor")
// }

constructor(app:string){
this.app=app
//this.app='leaftaps'
console.log(this.app)
}

// }
//this -> keyword
//refer your current class proerty,method,

//let objectName=new Browser()
}

// let obj=new Browser("leaftaps")

// //objectName.method()
// //objectName.property

// obj.loadUrl()
// console.log(obj.browserName)