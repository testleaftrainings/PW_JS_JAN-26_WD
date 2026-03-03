import { GrandparentMethod } from "./GrandParent"

export class ParentMethod extends GrandparentMethod{

    loadurl(){
        console.log("Url Loaded")
    }

    loginInfo(){
        console.log("Login Info Entered")
    }

    title(){
        console.log("Parent Title")
        
    }

}


