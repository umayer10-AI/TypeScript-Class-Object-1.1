"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    Brand;
    Color;
    Price;
    Free;
    constructor(Brand, Color, Price, Free) {
        this.Brand = Brand;
        this.Color = Color;
        this.Price = Price;
        this.Free = Free;
    }
}
const b = new Car("TOYOTA", "Black", 5000, true);
b.Brand = "Umayer";
console.log(b.Brand)
//# sourceMappingURL=app.js.map