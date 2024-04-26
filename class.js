class Car{
    constructor(make,model,year,isAvailable){
        this.make=make;
        this.year=year;
        this.model=model;
        this.isAvailable= true;
    }
    toogleAvailability(){
        this.isAvailable=!this.isAvailable;

    }
}
const myCar = new Car("Toyota", "Camry", 2020);
console.log(`Car details: ${myCar.make} ${myCar.model} (${myCar.year})`);
console.log(`Is available for rent: ${myCar.isAvailable}`);

myCar.toogleAvailability();
console.log(`Is available for rent after toggle: ${myCar.isAvailable}`);   


class Rental{
    constructor(car,rentalName,rentalStart,rentalEnd){
        this,car=car;
        this.rentalName=rentalName;
        this.rentalStrart=rentalStart;
        this,rentalEnd=rentalEnd;
    }
    calculateRentalDuration(){
        const time = this.rentalEnd-this.rentalStrart
        return time
    }

}

const car = { make: 'Toyota', model: 'Camry' };
const rentalStart = new Date('2024-04-25');
const rentalEnd = new Date('2024-06-25');

const rental = new Rental(car, 'John Doe', rentalStart, rentalEnd);
const rentalDuration= rentalEnd-rentalStart;
console.log(`Rental duration is ${rentalDuration} months`);