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
    constructor(name) {
        this.name = name;
    }
}
class B extends A {
    constructor(name) {
        super(name);
    }
}
const data = new B("Umayer");
console.log(data);
//# sourceMappingURL=app.js.map