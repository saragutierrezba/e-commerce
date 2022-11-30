
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

//Creo el carrito array 
let carrito = [];
//si hay algo en el local storage se carga en el carrito
if (localStorage.getItem("carrito") ) {
  carrito = JSON.parse(localStorage.getItem ("carrito"));
}


//Manipulacion con DOM en el div contenedorProductos de la página productos de html
const contenedorProductos = document.getElementById("contenedorProductos");

//Función para mostrar productos 
const mostrarProductos = () => {
  productosArray.forEach((productosArray) => {
      const card = document.createElement("div");
      card.classList.add ("col-xl-3", "col-md-6", "col-xs-12") 
      card.innerHTML = `
        <div class = "card">
           <img src=" ${productosArray.img}" class= "card-img-top imgProductos" alt="${productosArray.name}">
           <div class="card-body"> 
           <h3 class="card-title"> ${productosArray.name} </h3>
           <p class="card-text">$ ${productosArray.price} </p>
           <button class="btn colorBoton" id="boton${productosArray.id}"> Agregar al carrito </button>
           </div>
        </div>
      `
      contenedorProductos.appendChild(card);

      //Agregar productos al carrito:
      const boton = document.getElementById (`boton ${productosArray.id}`);
      boton.addEventListener("click", () => {
        //agregarAlCarrito(productosArray.id)
      })
  }) 
  
}
//función de agregar al carrito

  const agregarAlCarrito = (id) =>{
    let producto = productosArray.find ((producto)= productosArray.id === id);
    const productoEnCarrito = carrito.find ((producto)=productosArray.id === id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    }else {
       carrito.push(producto)
       //local storage 
       localStorage.setItem("carrito", JSON.stringify(carrito));
    } 
    calcularTotal();
  }

mostrarProductos();

//Mostrar carrito de compras

const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
  mostrarCarrito();
}  )

//Función para mostrar carrito

const mostrarCarrito = () => {
  contenedorCarrito.innerHTML="";
  carrito.forEach((producto) => {
    const card = document.createElement("div");
      card.classList.add ("col-xl-3", "col-md-6", "col-xs-12") 
      card.innerHTML = `
        <div class = "card">
           <img src=" ${productosArray.img}" class= "card-img-top imgProductos" alt="${productosArray.name}">
           <div class="card-body"> 
           <h3 class="card-title"> ${productosArray.name} </h3>
           <p class="card-text">$ ${productosArray.price} </p>
           <p class="card-text">$ ${productosArray.cantidad} </p>
           <button class="btn colorBoton" id="eliminar${productosArray.id}"> Eliminar Producto </button>
           </div>
        </div>
      `
      contenedorCarrito.appendChild(card);


      //Eliminar productos del carrito
      const boton = document.getElementById(`eliminar${productosArray.id}`);
      boton.addEventListener("click", () => {
        eliminarDelCarrito (productosArray.id);
      })

  })
  calcularTotal();
} 

//Función que elimina el producto del carrito

const eliminarDelCarrito = (id) =>{
  const producto = carrito.find ((producto) = productosArray.id === id)
  const indice = carrito.indexOf (producto);
  carrito.splice (indice, 1);
  mostrarCarrito();
  //localstoage
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Funcion vaciar carrito

const vaciarCarrito = document.getElementById (vaciarCarrito);

vaciarCarrito.addEventListener ("click", () => {
   eliminarTodoElCarrito ();
})

//Función para eliminar todo el carrito

const eliminarTodoElCarrito = () => {
  carrito = [];
  mostrarCarrito ();
  //localstorage
  localStorage.clear();
};

//mostrar el mensaje con el total de su compra
 const total = document.getElementById(total);

const calcularTotal = () => {
   let totalCompra = 0;
   carrito.forEach ((producto) => {
    totalCompra += productosArray.price
   })
  total.innerHTML = ` $${totalCompra}`
}


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