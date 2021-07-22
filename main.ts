
import { Punto } from "./punto";
import { Triangulo } from './triangulo';

let punto1 = new Punto(10,20);
// Pruebo toString()
console.log("toString()************");
console.log(punto1.toString());

// Pruebo distanciaAlOrigen()
console.log("distanciaAlOrigen************");
console.log(punto1.distanciaAlOrigen());

// Pruebo calcularDistancia()
console.log("calcularDistancia************");
console.log(punto1.calcularDistancia(new Punto(55,20)));

// Pruebo calcularCuadrante()
console.log("calcularCuadrante************");
console.log("Cuadrante: " + punto1.calcularCuadrante());
console.log("Cuadrante: " + new Punto (-20,30).calcularCuadrante());
console.log("Cuadrante: " + new Punto (-120,-60).calcularCuadrante());
console.log("Cuadrante: " + new Punto (70,-52).calcularCuadrante());

// Pruebo calcularMasCercano()
console.log("calcularMasCercano************");
let arrP:Punto[] = [
                new Punto (-120,-52),
                new Punto (11,21),
                new Punto (1200,0),
                new Punto (-35,25),
                new Punto (70,-18)
                    ];
console.log(punto1.calcularMasCercano(arrP));

// Pruebo Triangulo
console.log("Pruebo Triangulo************");
let nTriangulo:Triangulo = new Triangulo(
                                    new Punto(20,10),
                                    new Punto(60,12),
                                    new Punto(45,-40)
                                        );


// Pruebo Triangulo
console.log("Pruebo Gets************");
console.log(nTriangulo.print());

console.log("Pruebo Sets************");
nTriangulo.setV1(new Punto(40,20));
nTriangulo.setV2(new Punto(80,35));
nTriangulo.setV3(new Punto(55,-50));
console.log("Nuevos vertices: " + nTriangulo.print());

console.log("Pruebo Calcular Longitud Lados************");
console.log(nTriangulo.calcularLongitudLados());

console.log("Lado 1: "+ new Punto(40,20).calcularDistancia(new Punto(80,35)) );
console.log("Lado 2: "+ new Punto(80,35).calcularDistancia(new Punto(55,-50)) );
console.log("Lado 3: "+ new Punto(55,-50).calcularDistancia(new Punto(40,20)) );

