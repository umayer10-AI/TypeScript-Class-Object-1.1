// class Car {
//     constructor(private Brand: string,public Color: string,public Price: number,public Free: Boolean){

//     }
//     getData() {
//         this.Brand="lala"
//     }
// }
// const b = new Car("TOYOTA", "Black", 5000, true)
// // b.Brand = "Umayer"
// b.getData()
// console.log(b.Brand)

// class A {
//     private gg:string = "Halua"
//     constructor(public name: string, public age: number = 0){

//     }
// }
// class B extends A {
//     constructor(name: string, age: number){
//         super(name,age)
//     }

//     getVal(){
//         console.log(this.name,this.age,this.gg)
//     }
// }

// const data = new B("Umayer",21)
// data.getVal()
// console.log(data)


// class A {
//     // public name: string = "Umayer"
//     // private name: string = "Umayer"
//     protected name: string = "Umayer"
// }
// class B extends A {
//     public meterial: string = "metal"

//     getChange(){
//         this.name = "Lala"
//     }
// }

// const data = new B()
// data.getChange()
// // data.name = "jojo"
// console.log(data)

class A {
    // private name:string = "Umayer"
    constructor(protected name:string){

    }
}
class B extends A {
    show(){
        console.log(this.name)
    }
}
const b = new B("Umayer")
b.show()