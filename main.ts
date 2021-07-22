
import { Punto } from "./punto";

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

