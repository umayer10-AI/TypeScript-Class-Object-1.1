"use strict";
// class Car {
//     constructor(private Brand: string,public Color: string,public Price: number,public Free: Boolean){
Object.defineProperty(exports, "__esModule", { value: true });
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
class A {
    // public name: string = "Umayer"
    // private name: string = "Umayer"
    name = "Umayer";
}
class B extends A {
    meterial = "metal";
    getChange() {
        this.name = "Lala";
    }
}
const data = new B();
data.getChange();
// data.name = "jojo"
console.log(data);
//# sourceMappingURL=app.js.map