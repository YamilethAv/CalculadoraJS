let calculadora ; //almacena el numero ingresado y lo valida con el switch

calculadora = parseInt(prompt("Ingresa un numero para elegir la operación a realizar: " +
"\n 1. Suma \n 2. Resta \n 3. Multiplicación \n 4. División \n 5. Raíz \n 6. Calcular hipotenusa \n 7. Suma del cuadrado de dos números " + 
"\n 8. Calcular el área de un triángulo \n 9. Calcular el área de un cuadrado \n10. Calcular el área de un rectángulo"));

let suma;//esta variable suma la cantidad de numeros ingresados
let resta;
let multiplicacion;
let division;
let raiz

let x,y;
//mini-proyecto
switch(calculadora){

    case 1://se realiza la suma
           
    alert("Suma");
    x = parseInt(prompt("Ingresa el primer numero"));
    y = parseInt(prompt("Ingresa el segundo numero"));

    suma = x+y; //la suma se iguala a el primero numero ingresado mas el segundo

    alert("la suma de los 2 numeros es: " + suma);
                
    break;

    case 2 :
        alert("Resta");
        x = parseInt(prompt("Ingresa el primer numero"));
        y = parseInt(prompt("Ingresa el segundo numero"));

        resta = x-y;

        alert("la resta de los 2 numeros es: " + resta);

    break;

    case 3 :
      alert("Multiplicacion");
      x = parseInt(prompt("Ingresa el primer numero"));
      y = parseInt(prompt("ingresa el segundo numero"));

      multiplicacion = x*y;

      alert("la resta de los 2 numeros es: " + multiplicacion);
    break;

    case 4:
     alert("Division");
     x = parseInt(prompt("ingresa el primer numero"));
     y = parseInt(prompt("ingresa el segundo numero"));

     division = x/y;

     alert("La resta de los 2 numero es: " + division);
    break;

    case 5:
        alert("Raiz");
        x = parseInt(prompt("ingresa el primer numero"));
        y = parseInt(prompt("Ingresa el segundo"));
       
       suma = x+y;

        raiz = Math.sqrt(suma);

       alert("la raiz de la suma de los numeros " + raiz);

    break;
    
    case 6 : // Calcular la hipotenusa
        alert("Calcula la Hipotenusa");
        x = parseFloat(prompt("Ingresa el primer número"));
        b = parseFloat(prompt("Ingresa el segundo número"));

        xb = x ** 2 + b ** 2;
        hipotenusa = Math.sqrt(xb);

        alert("La hipotenusa es " + hipotenusa);
    break;

    case 7 : //elevar 2 numeros al cuadrado y los van a sumar 
        alert("Calculo de los cuadrados de 2 números");
        x = parseFloat(prompt("Ingresa el primer número"));
        b = parseFloat(prompt("Ingresa el segundo número"));

        sumaCuadrados = x ** 2 + b ** 2;

        alert("La suma de los cuadrados es " + sumaCuadrados);
    break;

    case 8: //calcular el area de un triangulo
        alert("Calcular el área de un triángulo");
        x = parseFloat(prompt("Ingresa el primer número"));
        b = parseFloat(prompt("Ingresa el segundo número"));
        
        area = (x * b) / 2;
        alert("El área del triángulo es " + area);
    break;

    case 9: //calcular el area de un cuadrado
        alert("Calcular el área de un cuadrado");
        x = parseFloat(prompt("Ingresa el valor del lado del cuadrado"));
        
        area = x ** 2;
        alert("El área del cuadrado es " + area);
    break;

    case 10: //calcular el area de un rectangulo
        alert("Calcular el área de un rectángulo");
        x = parseFloat(prompt("Ingresa el primer número"));
        b = parseFloat(prompt("Ingresa el segundo número"));
        
        area = x * b
        alert("El área del rectángulo es " + area);
    break;
}