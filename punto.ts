export class Punto
{
    // ATRIBUTOS
    private x:number;
    private y:number;

    // CONSTRUCTOR
    constructor(coorX:number, coorY:number)
    {
        this.x = coorX;
        this.y = coorY;
    }

    // GETTERS & SETTERS
    // Get--------------

    public getX():number
    {
        return this.x;
    }

    public getY():number
    {
        return this.y;
    }

    // METODOS
    // toString() -> Imprime en un string las coordenadas del punto
    public toString():string
    {
        let coord:string =  "(" + this.getX()
                            + "," + this.getY()
                            + ")";
        return coord;
    }

    // distanciaAlOrigen() -> Devuelve distancia del punto
    // al punto de coordenadas 0,0
    public distanciaAlOrigen():number
    {
        const origen = new Punto(0,0);
        let distancia:number = 0;
        distancia = 
            parseFloat(
                (
                    Math.sqrt(
                            Math.pow((origen.getX()-this.getX()),2) 
                            + Math.pow((origen.getY()-this.getY()),2) 
                            )
                ).toFixed(2)
            );
        return distancia;
    }

    // calcularDistancia() -> Devuelve la distancia
    // entre el punto y otro pasado como parametro a la función
    public calcularDistancia(nPunto:Punto):number
    {
        let distancia:number = 0;
        distancia = 
            parseFloat(
                (
                    Math.sqrt(
                            Math.pow((nPunto.getX()-this.getX()),2) 
                            + Math.pow((nPunto.getY()-this.getY()),2) 
                            )
                ).toFixed(2)
            );
        return distancia;
    }

    // calcularCuadrante() -> Devuelve la distancia
    // entre el punto y otro pasado como parametro a la función
    public calcularCuadrante():number
    {
        let cuadrante:number = 0;
        let coorX = this.getX();
        let coorY = this.getY();

        if(coorX>0)
        {
            coorY>0 ? cuadrante = 1
                    : cuadrante = 4
        }
        else
        {
            coorY>0 ? cuadrante = 2
            : cuadrante = 3
        }
        return cuadrante;
    }

    // calcularMasCercano() -> Devuelve el punto más cercano
    // de los que hay en el array que se pasa por parametro
    public calcularMasCercano(arrPuntos:Punto[]):Punto
    {
        let masCercano:Punto = new Punto(0,0);
        let indiceCercano:number = null;
        let minDistancia:number = 0;
        let distancias:number[] = [];

        for(let i=0; i<arrPuntos.length; i++)
        {
            let p = this.calcularDistancia(arrPuntos[i]);
            distancias.push(p);
        }

        distancias.forEach(function(valor,i)
                            {
                                if(i!=0)
                                {
                                    if(valor<minDistancia )
                                    {
                                        minDistancia = valor;
                                        indiceCercano = i;  
                                    }
                                  
                                }
                                else
                                {
                                    minDistancia = valor;
                                    indiceCercano = i;
                                }
                            })
        
        masCercano = arrPuntos[indiceCercano];
        
        return masCercano;
    }
} 