"use strict";
class Character {
    constructor(id, name, level, hp) {
        this._isDead = false;
        this.id = id;
        this._name = name;
        this._level = level;
        this._hp = hp;
    }
    set name(newName) {
        this._name = newName;
        console.log(`Your new name is ${this._name}`);
    }
    getDamage(damage) {
        if (this._hp - damage <= 0) {
            this._isDead = true;
            console.log("Enemy is dead");
        }
        return this._hp - damage;
    }
    levelUp(lvlToUp) {
        this._level = this._level + lvlToUp;
        console.log(`You are now level ${this._level}`);
        return this._level;
    }
}
const knight = new Character(1, "Knight", 1, 100);
class Enemy {
    constructor(id, name, level, _hp, isDead) {
        this.id = id;
        this.name = name;
        this.level = level;
        this._hp = _hp;
        this.isDead = isDead;
    }
    getDamage(damage) {
        if (this._hp - damage <= 0) {
            this.isDead = true;
            console.log("Enemy is dead");
        }
        return this._hp - damage;
    }
    get hp() {
        return this._hp;
    }
}
const skeleton = new Enemy(1, "Skeleton", 1, 150);
class Soldier {
    constructor(name) {
        this.name = name;
        this._hp = 100;
        this.isDead = false;
        Soldier.addSoldier();
    }
    static addSoldier() {
        Soldier._numberOfSoldiers++;
        console.log("New number of soldiers: ", Soldier._numberOfSoldiers);
    }
    static get pelothonSize() {
        return Soldier._numberOfSoldiers;
    }
    getDamage(damage) {
        if (this._hp - damage <= 0) {
            this.isDead = true;
            console.log("Enemy is dead");
        }
        return this._hp - damage;
    }
}
Soldier._numberOfSoldiers = 0;
console.log("Pelothon size: ", Soldier.pelothonSize);
const ryan = new Soldier("James Ryan");
console.log("Pelothon size: ", Soldier.pelothonSize);
//# sourceMappingURL=index.js.map