
// Mi proyecto se trata de una Tienda Online de Obras artisticas de una artista llamada Yanina Rojas

let productos = parseInt(prompt ("¿Que producto te gustaria comprar? 1.Acuarela - 2.Retratos - 3.Souvenirs"))
const seguirComprando = true;
let totalCompra = 0; 
let decision;

// Arreglo de productos
const productosArray = ["acuarela", "retratos", "souvenirs"]
console.log (productosArray)

// Clase producto
class NuevoProducto{
  constructor(id,name,price,stock){
    this.id = id
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}
const acuarela = new NuevoProducto(1,'Acuarela',200,10);
productosArray.push(acuarela);
const pantalon = new NuevoProducto(2,'Retratos',400,5);
productosArray.push(retratos);
const accesorios = new NuevoProducto(3,'Souvenirs',500,20);
productosArray.push(souvenirs);

console.log(productosArray)


while (seguirComprando === true) {
    if(productos === 1){
        totalCompra = totalCompra + 200
    }else if (productos === 2){
    totalCompra = totalCompra + 400 
    }else if(productos === 3){
    totalCompra = totalCompra + 500
    }

    decision = parseInt (prompt("¿Quiere seguir comprando? 1.Si 2.No"))
    if(decision===1){
    productos = parseInt (prompt ("¿Qué otro producto desea llevar? 1.Acuarela - 2.Retratos - 3.Souvenirs"))
    }else {
      seguirComprando = false
    }
    alert(`El total de su compra es ${totalCompra}. Gracias por su compra!`)
}

const totalCompraConDescuento = descuento(totalCompra)
function descuento(valor) {
    let descuento = 0
    if (valor <= 200) {
      descuento = 10
    } else if (valor > 200 && valor <= 500) {
      descuento = 15
    } else {
      descuento = 20
    }
    return valorFinal
}

alert(`El total de tu compra con descuento es ${totalCompraConDescuento}`)
let valorDescuento = valor * (descuento / 100)
let valorFinal = valor - valorDescuento