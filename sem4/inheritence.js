class Robot {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log(`${this.name} is moving...`);
    }
}

class Weapon {
    constructor(description) {
        this.description = description;
    }

    fire() {
        console.log(`Firing ${this.description}...`);
    }
}

class CombatRobot extends Robot {
    constructor(name) {
        super(name);
        this.weapons = [];
    }

    addWeapon(weapon) {
        this.weapons.push(weapon);
    }

    fireAll() {
        console.log(`${this.name} is firing all weapons:`);
        this.weapons.forEach(weapon => weapon.fire());
    }
}


const r1 = new CombatRobot("Warrior-1");
r1.addWeapon(new Weapon("Laser Cannon"));
r1.addWeapon(new Weapon("Plasma Rifle"));
r1.move();
r1.fireAll();
const r2 = new CombatRobot("Defender-2");
r2.addWeapon(new Weapon("Missile Launcher"));
r2.move();
r2.fireAll();
console.log("Robots ready for combat.");

Robot.prototype.fly = function() {
    console.log(`${this.name} is flying...`);
}
