// let message: string = "Hello world";

// message="q royo";

// let exticiónDinosaurios = 76_000_000,
//     dinosaurioFav="T-Rex",
//     extintos = true;


// /*Instead of: 

// let dondeVivianLosDinosaurios;
// dondeVivianLosDinosaurios="earth";

// */

// //Do: 
// let dondeVivianLosDinosaurios: string;
// dondeVivianLosDinosaurios="earth";

// //////Arrays

// let animals: string[] = ["dog", "cat", "snake"],
//     nums: number[] = [1, 2, 3, 4],
//     checks: boolean[] = [true, false];
    
// let animals2: Array<string> = ["dog", "cat", "snake"],
//     nums2: Array<number> = [1, 2, 3, 4],
//     checks2: Array<boolean> = [true, false];

// let myArray = []

// animals.map(animal=>animal.toLocaleLowerCase());
// nums.map(num=>num.toString());

// ////Tuplas
// let tupla: [number, string] = [1, "dog"];
// tupla = [1,"dog"]


// //Enum
// enum Fruits {MangoPrice = 10, ApplePrice, KiwiPrice};

// const enum Sizes {S= "Small", M= "Medium", L= "Large", XL= "Extra large"}

// let myShirtSize = Sizes.S;

// /* console.log(`Do you have this shirt on ${myShirtSize}`); */


// //Objetos
// type Adress = {
//     street: string,
//     number: number,
//     city: string,
// }

// type Customer = {
//     id: number, 
//     name:string, 
//     size:Sizes
//     address:Adress
// }

// const roman: Customer = {
//     id:0, 
//     name:"Román", 
//     size: Sizes.S,
//     address:{
//         street: "72nd street",
//         number: 123,
//         city: "New York"
//     }
// }

// const cusomers: Customer[]=[]


// //Funciones
// const arrowAdd : (numA: number, numB: number)=>number = (numA, numB)=>numA+numB;

// function add(numA: number, numB: number, pow: number = 2):number{
//     return Math.pow((numA+numB), pow)
// }
// const sayHi: () => void = () => console.log("Hi there!");
// sayHi();

// // console.log(add(1, 1, 3));

// //never
// function userError(): never{
//     throw new Error("User error");
// }

// interface Square{
//     kind: "square",
//     size: number
// }

// interface Rectangle{
//     kind: "rectangle",
//     width: number,
//     height: number
// }

// type Shape = Square | Rectangle;

// function area (s: Shape): number{
//     let area: number=0;

//     if(s.kind==="square"){
//         area = s.size*s.size;
//         return area;
//     }
//     else if(s.kind==="rectangle"){
//         area = s.width*s.height;
//         return area;
//     }
//     console.log(s);
    
    
//     //const _ensureAllCasesAreHandled: never = s;
//     return area;
// }


// //Union types
// /* let notUnion = 0;

// notUnion = "0"; */

// let myUnion: number | string = 0;

// myUnion= "0";

// type Animal={
//     id: number,
//     weight: number,
// }

// type Movement = {
//     walk: boolean,
//     fly: boolean,
// }

// type Person = {
//     id: number,
//     name: string,
// }

// const somethingAlive: Animal | Person = {
//     id: 1,
//     weight:100
// }

// const bee: Animal & Movement = {
//     id: 1,
//     weight: 0.01,
//     walk: false,
//     fly: true
// }
// const dog: Animal & Movement = {
//     id: 2,
//     weight: 5,
//     walk: true,
//     fly: false
// }

// //Literal

// type Fibo = 0 | 1 | 2 | 3 | 5; 

// const fibonacciNumber: 0 | 1 | 2 | 3 | 5 = 0;

// //Nullable
// function toNum(s: string | null | undefined){
//     if(!s){
//         return 0
//     }
//     return parseInt(s);
// }

// const n = toNum(undefined);

// //Type assertions
// const myName: any = "Román", 
//     myNameAsString =  myName as string;

// console.log(myNameAsString.toUpperCase());


// let anyNum: any = 77;
  
// // Conversion from any to number
// let num = <Number> anyNum;
  
// console.log(num);
// console.log(typeof num);

// function dummyFunc (x: string | number):void{
//     if(typeof x === "string"){
//         //Do some string logic
//     }
//     else if(typeof x === "number"){
//         //Do some number logic
//     }
// }

// // Unknown

// //The meth foo() doesn't exist
// let anyVar: any = 10;
// anyVar.foo();

// let unknownVar: unknown = 10;
// //unknownVar.foo(); this will show an error

///////OOP WITH TYPESCRIPT

//Classes

class Character {
    readonly id: number;
    private _name: string;
    job?: string;
    private _level: number;
    private _hp: number;
    _isDead: boolean = false;
    
    constructor(id: number, name: string, level:number, hp:number){
        this.id = id;
        this._name = name;
        this._level = level;
        this._hp = hp;
    }

    set name(newName: string){
        this._name = newName;
        console.log(`Your new name is ${this._name}`);
    }

    getDamage(damage: number):number{
        if(this._hp-damage<=0){
            this._isDead = true;
            console.log("Enemy is dead");
        }
        return this._hp-damage;
    }

    levelUp(lvlToUp: number): number {
        this._level = this._level + lvlToUp;
        console.log(`You are now level ${this._level}`);
        return this._level;
      }
} 

const knight = new Character(1, "Knight", 1, 100);



//Parameter properties
class Enemy {
    actualWorld?: string;

    constructor(
        readonly id: number,
        readonly name: string, 
        readonly level:number, 
        private _hp:number, 
        public isDead?:boolean){}
    
    getDamage(damage: number):number{
        if(this._hp-damage<=0){
            this.isDead = true;
            console.log("Enemy is dead");
        }
        return this._hp-damage;
    }

    //Getters and setters
    get hp(): number{
        return this._hp;
    }
}

const skeleton = new Enemy(1, "Skeleton", 1, 150);
// console.log("skeleton hp: ", skeleton.hp);

class Soldier {
    //Static property
    private static _numberOfSoldiers: number = 0;
    //
    private _hp:number = 100;
    public isDead: boolean = false
    
    constructor(readonly name:string){
        Soldier.addSoldier();
    }

	//Static methods
    private static addSoldier():void{
        Soldier._numberOfSoldiers++
        console.log("New number of soldiers: ", Soldier._numberOfSoldiers);
    }
    static get pelothonSize(): number{
        return Soldier._numberOfSoldiers;
    }

    //Instance methods
    getDamage(damage: number):number{
        if(this._hp-damage<=0){
            this.isDead = true;
            console.log("Enemy is dead");
        }
        return this._hp-damage;
    }
}

console.log("Pelothon size: ", Soldier.pelothonSize);
const ryan = new Soldier("James Ryan");
console.log("Pelothon size: ", Soldier.pelothonSize);





