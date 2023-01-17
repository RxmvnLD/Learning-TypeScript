abstract class BasicData{
    constructor(
        public name:string,
        public desc: string,
        public created_at: Date,
        public created_by: string,
        ){}

    getFullYear(){
        return this.created_at.getFullYear();
    }

    get fullDesc(){
        return `${this.name} - ${this.desc}`;
    }
}

class Product extends BasicData{
    constructor (
        //basic data
        name: string,
        desc: string,
        created_at: Date,
        created_by: string,
        //product data
        public stock: number,
        public sku: string,
        ){
            super(name, desc, created_at, created_by);
        }

        override get fullDesc(){
            return `Producto: ${super.fullDesc}\nStock: ${this.stock}\nSKU: ${this.sku}`;
        }
}







class Category extends BasicData{
    constructor (
        //basic data
        name: string,
        desc: string,
        created_at: Date,
        created_by: string,
        ){
            super(name, desc, created_at, created_by);
        }
    /* saved(){
        console.log('Category saved');
    } */
}

const iPhone = new Product('iPhone', 'The new iPhone 14 is here', new Date(), 'admin', 10, 'ABC123');

//Interface
/* abstract class Animal{
     abstract name: string;
     abstract walk (): void;
     abstract onomatopeya(): string;
} */

interface Animal{
    name: string;
    walk (): void;
    onomatopeya(): string;
}

class Horse implements Animal{
    name: string = 'Caballo';
    walk(){
        console.log('Walking');
    }
    onomatopeya(){
        return "hin"; 
    }
}

class Dog implements Animal{
    name: string = 'Perro';
    walk(){
        console.log('Walking');
    }
    onomatopeya(){
        return "guau"; 
    }
}


//Index signature
const salary1 = {
    baseSalary: 100_000,
    yearlyBonus: 20_000
};

const salary2 = {
    contractSalary: 110_000
};

function totalSalary(salaryObject: {[name: string]:number}) {
    let total = 0;
    for (const name in salaryObject) {
        total += salaryObject[name];
    }
    return total;
}
console.log(totalSalary(salary1));
console.log(totalSalary(salary2));