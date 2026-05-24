class Car {
    constructor(private Brand: string,public Color: string,public Price: number,public Free: Boolean){

    }
    getData() {
        this.Brand="lala"
    }
}
const b = new Car("TOYOTA", "Black", 5000, true)
// b.Brand = "Umayer"
b.getData()
console.log(b.Brand)