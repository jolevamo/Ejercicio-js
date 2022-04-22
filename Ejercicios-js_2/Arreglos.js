/*
//Objeto
var frutas1 ={
    fruta1: "Manzana",
    fruta2: "Mango",
    fruta3: "Pera"
}
document.write("Objeto 1: "+frutas1.fruta3+"<br>");
//Arreglo
var frutas2 = [
    "Piña",
    "Banano",
    "Naranjas"
]
document.write(frutas2[1]);
var product = {
    Verdura1: "Tomate",
    Verdura2: "Cebolla",
    Verdura3: "Ajo"
}
//Recorrer el objeto
for (pro in product){
    document.write("Propiedad: "+pro+"="+product[pro]+"<br>");
}
var products = {}
Object.defineProperty(products,"fruta1",{value:"Mango",writable:true,enumerable:true,configurable:true});
document.write(products.fruta1);
//Ejercicio 1
var datos = {
    nombre : "Camilo",
    Pasatiempos: "Jugar Futbol",
}
//Ejercicio 5
var productos = {
    nombre: [],
    presentacion: [],
    valor: []
}
for (let index = 0; index < 2; index++) {
    productos.nombre[index] = prompt("Digite el nombre del producto "+(index+1)+": ");
    productos.presentacion[index] = prompt("Digite la presentación del producto "+(index+1)+": ");
    productos.valor[index] = prompt("Digite el valor del producto "+(index+1)+": ");    
}
document.write("<table border = '1'>");
for (pro in productos) {
    document.write("<tr>");
    for (let i = 0; i < 2; i++) {
        document.write("<td>");
        document.write(productos[pro][i]);
        document.write("</td>");
    }
    document.write("</tr>");
    
}
document.write("</table>");*/
//Ejercicio 17
var arreglo1= [3,5,9,10,35,42,12,22,25]; 
var arreglo2= [9,5,33,12,7,20,22,3,8];
var suma1 = 0;
var suma2 = 0;
for (i=0; i < arreglo1.length ; i++) {
    suma1 = suma1 + arreglo1[i];
    suma2 = suma2 + arreglo2[i];
    document.write(arreglo1[i]+" + "+arreglo2[i]+" = "+(arreglo1[i]+arreglo2[i]+"<br>"));
}
document.write(suma1+" + "+suma2+" = "+(suma1+suma2));