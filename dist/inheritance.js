"use strict";
class BasicData {
    constructor(name, desc, created_at, created_by) {
        this.name = name;
        this.desc = desc;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    getFullYear() {
        return this.created_at.getFullYear();
    }
    get fullDesc() {
        return `${this.name} - ${this.desc}`;
    }
}
class Product extends BasicData {
    constructor(name, desc, created_at, created_by, stock, sku) {
        super(name, desc, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
    get fullDesc() {
        return `Producto: ${super.fullDesc}\nStock: ${this.stock}\nSKU: ${this.sku}`;
    }
}
class Category extends BasicData {
    constructor(name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
    }
}
const iPhone = new Product('iPhone', 'The new iPhone 14 is here', new Date(), 'admin', 10, 'ABC123');
class Horse {
    constructor() {
        this.name = 'Caballo';
    }
    walk() {
        console.log('Walking');
    }
    onomatopeya() {
        return "hin";
    }
}
class Dog {
    constructor() {
        this.name = 'Perro';
    }
    walk() {
        console.log('Walking');
    }
    onomatopeya() {
        return "guau";
    }
}
const salary1 = {
    baseSalary: 100000,
    yearlyBonus: 20000
};
const salary2 = {
    contractSalary: 110000
};
function totalSalary(salaryObject) {
    let total = 0;
    for (const name in salaryObject) {
        total += salaryObject[name];
    }
    return total;
}
console.log(totalSalary(salary1));
console.log(totalSalary(salary2));
//# sourceMappingURL=inheritance.js.map