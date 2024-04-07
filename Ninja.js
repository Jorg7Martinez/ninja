class Ninja {
  constructor(nombre, salud = 100, velocidad = 3, fuerza = 3) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = velocidad;
    this.fuerza = fuerza;
  }

  sayName() {
    console.log(`Soy el ninja ${this.nombre}`);
  }

  showStats() {
    console.log(
      `Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`
    );
  }

  drinkSake() {
    this.salud += 10;
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja {
  constructor(
    nombre,
    salud = 200,
    velocidad = 10,
    fuerza = 10,
    sabiduria = 10
  ) {
    super(nombre, salud, velocidad, fuerza);
    this.sabiduria = sabiduria;
  }

  speakWisdom() {
    super.drinkSake();
    console.log("La verdadera sabiduría viene de la experiencia.");
  }

  drinkSake() {
    console.log(`${this.nombre} ha bebido sake y ha aumentado su salud.`);
  }
}

const sensei1 = new Sensei("Spike");
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();
