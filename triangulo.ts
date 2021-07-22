import { Punto } from "./punto";

export class Triangulo
{
    // ATRIBUTOS
    private vertice1:Punto;
    private vertice2:Punto;
    private vertice3:Punto;

    // CONSTRUCTOR
    constructor(v1:Punto,v2:Punto,v3:Punto)
    {
        this.vertice1 = v1;
        this.vertice2 = v2;
        this.vertice3 = v3;
    }

    // GETTERS & SETTERS
    //Get---------------
    public getV1():Punto
    {
        return this.vertice1;
    }

    public getV2():Punto
    {
        return this.vertice2;  
    }

    public getV3():Punto
    {
        return this.vertice3;  
    }

    //Set---------------
    public setV1(p:Punto):void
    {
        this.vertice1 = p;
    }

    public setV2(p:Punto):void
    {
        this.vertice2 = p;  
    }

    public setV3(p:Punto):void
    {
        this.vertice3 = p;  
    }

    // MÉTODOS
    // calcularLongitudLados -> Devuelve array number
    // con la longitud(distancia entre vertices) de cada lado
    public calcularLongitudLados():number[]
    {
        let longLados:number[] = [];
        const numLados:number = 3;

        let p1:Punto = this.getV1();
        let p2:Punto = this.getV2();
        let p3:Punto = this.getV3();

        let vertices:Punto[] = [p1,p2,p3];

        for(let i=0; i<numLados; i++)
        {
            if(i==(numLados-1))
            {
                let l = vertices[i].calcularDistancia(vertices[0]);
                longLados.push(l);     
            }
            else
            {
                let l = vertices[i].calcularDistancia(vertices[i+1]);
                longLados.push(l);
            }
        }
        return longLados;
    }

    // print -> Imprime los vertices
    public print():string
    {
        let coorVertices:string = "";
        coorVertices += "\nVertice 1: " + this.getV1()
                        + " - Vertice 2: " + this.getV2()
                        + " - Vertice 3: " + this.getV3()
                        + "\n";
        return coorVertices;
    }
}