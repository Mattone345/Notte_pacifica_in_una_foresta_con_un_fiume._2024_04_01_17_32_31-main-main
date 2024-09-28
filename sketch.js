let nuova_nuvola;
let albero;
let albero2;
let lato;
let nuvola;
let nuovo_albero;
let n1;
let n3;
let n4;

function Mondo() {
  hideGrid();
  createCanvas3D(windowWidth, windowHeight);

  lato = 75;
  align(BOTTOM);
  diffuse("#4CAF50");
  terreno = box(0, 0, 0, lato, 0, lato);

  align(CENTER);
  diffuse("#03A9F4");
  let fiume = box(15, 0, 0, 10, 1, -lato - 1.5);

  align(TOP);
  diffuse("#34393C");
  let riva = box(9.7, 0, 0, 0.5, 0.8, 76.5);
  let riva2 = clone(riva, 19.8, 0, 0);

  diffuse("#9E9E9E");
  let luna = sphere(0, 55, lato, 9);
  setCamera(-lato / 1.2 - 10, 60, -lato / 1.2 - 5);
}

function Alberi() {
  albero = beginGroup();
  align(TOP);
  diffuse("#57220F");
  tronco = cylinder(0, 0, 0, 0.25, 2);
  ramo = cube(0, 1.1, 0.35, 0.5);
  ramo.setScale(0.5);
  ramo.setRotationX(320);
  ramo.setScaleZ(2);
  diffuse("#008000");
  foglie = capsule(0, 1.5, 0, 0.75, 0.5);
  foglieramo = capsule(0, 1.37, 0.55, 0.15, 0.1);
  foglieramo.setRotationX(40);
  foglieramo.setScale(1.75);
  endGroup();

  albero2 = beginGroup();
  align(TOP);
  diffuse("#57220F");
  tronco2 = cylinder(0, 0, 1, 0.25, 2);
  ramo2 = cube(0, 1.1, 1.35, 0.5);
  ramo2.setScale(0.5);
  ramo2.setRotationX(20);
  ramo2.setScaleZ(2);
  diffuse("#008000");
  foglie2 = capsule(0, 1.5, 1, 0.75, 0.5);
  foglieramo2 = capsule(0, 1.15, 1.55, 0.15, 0.1);
  foglieramo2.setRotationX(100);
  foglieramo2.setScale(2);
  endGroup();
}

function ripAlberi() {
  for (let i = 1; i <= random(125, 220); i++) {
    flag = true;
    let x = random(-lato / 2 + 1, lato / 2 + 1);
    let y = random(-lato / 2 + 1, lato / 2 + 1);
    if (x >= 9 && x <= 21) {
      i--;
      flag = false;
    }
    if (flag == true) {
      let scala = random(1.1, 1.9);
      let rotazione = random(0, 360);
      nuovo_albero = clone(albero, x, 0, y);
      nuovo_albero.setScale(scala);
      nuovo_albero.setRotationY(rotazione);
    }
  }

  for (let i = 1; i <= random(125, 220); i++) {
    flag = true;
    let x = random(-lato / 2 + 1, lato / 2 + 1);
    let y = random(-lato / 2 + 1, lato / 2 + 1);
    if (x >= 8.48 && x <= 21.52) {
      i--;
      flag = false;
    }
    if (flag == true) {
      let scala = random(1.1, 1.9);
      let rotazione = random(0, 360);
      nuovo_albero = clone(albero2, x, 0, y);
      nuovo_albero.setScale(scala);
      nuovo_albero.setRotationY(rotazione);
    }
  }
}

function Nuvole() {
  nuvola = beginGroup();
  diffuse("#b3b3b3");
  n1 = sphere(-1.25, 5, 0, 0.5);
  dimensioni = random(0.5, 1.5);
  n2 = sphere(1, 4.8, 0, 0.5);
  n3 = sphere(-0.5, 5.05, 0, 0.5);
  dimensioni = random(0.5, 1.5);
  n4 = sphere(0.5, 5.1, 0, 0.5);
  dimensioni = random(0.5, 1.5);
  n5 = sphere(0.5, 5, -1, 0.5);
  n6 = sphere(0, 5.3, -1.5, 0.5);
  n6.setRotationZ(45);
  n7 = sphere(-1.9, 4.8, 0.7, 0.5);
  n8 = sphere(0, 5, 1, 0.5, 1.5);
  endGroup();

  nuvola.setPositionY(30);
}

function ripNuvole() {
  for (let i = 0; i < random(30, 70); i++) {
    let nuvola_z = random(27, 34);
    let nuvola_x = random(-lato / 2, lato / 2);
    let nuvola_y = random(-lato / 2, lato / 2);
    let scala = random(0.9, 2.3);
    let rotazione = random(0, 360);
    nuova_nuvola = clone(nuvola, nuvola_x, nuvola_z, nuvola_y);
    nuova_nuvola.setScale(scala);
    nuova_nuvola.setRotationY(rotazione);
    let dimensioni = random(1, 2);
    n1.setScale(dimensioni);
    dimensioni = random(1, 2);
    n3.setScale(dimensioni);
    dimensioni = random(1, 2);
    n4.setScale(dimensioni);
    dimensioni = random(1, 2);
  }
}

function setup() {
  Mondo();
  getOrbit().autoRotate = true;

  Alberi();

  Nuvole();

  ripAlberi();

  ripNuvole();

  align(BOTTOM);
  lato = 76.5;
  diffuse("#4CAF50");
  lato = box(0, 0, 0, lato, 1, lato);
}

function draw() { }

function windowResized() {
  resizeCanvas3D(windowWidth, windowHeight);
}