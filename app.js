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
class A {
    name;
    age;
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }
}
class B extends A {
    constructor(name, age) {
        super(name, age);
    }
    getVal() {
        this.name = "lala";
        console.log(this.name, this.age);
    }
}
const data = new B("Umayer", 21);
data.getVal();
// console.log(data)
//# sourceMappingURL=app.js.map