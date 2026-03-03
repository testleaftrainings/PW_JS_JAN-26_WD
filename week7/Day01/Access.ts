export class Data{

    //public access anywhere
public add(a:number,b:number){
    console.log(a+b)
}

//private access inside same class
private sub(a:number,b:number){
    console.log(a-b)
}

//protected access inside same class or inhert
protected mul(a:number,b:number){
    console.log(a*b)
}


//create another public method for using private or protected method

public sub1(){
    this.sub(10,5)
    this.mul(2,20)
}


}

// let access=new Data()
// access.add(7,8)
// access.sub1()

