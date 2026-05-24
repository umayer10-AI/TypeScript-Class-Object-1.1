class Car {
    constructor(private Brand: string,public Color: string,public Price: number,public Free: Boolean){

    }
}
const b = new Car("TOYOTA", "Black", 5000, true)
b.Brand = "Umayer"