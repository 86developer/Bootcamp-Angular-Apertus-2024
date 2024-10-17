const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const addProduct = document.getElementById("addProduct");
const btnAdd = document.getElementById("btnAdd");

//Array donde se guardan los productos  ingresados
const productos = [];

//Agregar producto: Completar el formulario para agregar un producto a la lista.
btnAdd.addEventListener("click",
  function (event) {
    event.preventDefault();//Previene que se recargue la pagina al enviar

    //Toma de valores de entrada
    const newProductName = nameInput.value.trim();
    const newProductPrice = priceInput.value.trim();

    //Verificación de campos vacios
    if (newProductName === "" || newProductPrice === "") {
      alert("Por favor comoplete ambos campos");
      return;
    }
    // Crear un objeto para el nuevo producto
    const newProduct = {
      name: newProductName,
      price: newProductPrice
    }
    //Agregar el muevo producto al array
    productos.push(newProduct);

    //Limpiar los campos de entrada 
    nameInput.value = "";
    priceInput.value = "";
  });
//Funcion para mostrar el nuevo producto en un <li>
function mostrarProducto(producto) {
  const lista = document.getElementById("productAdd");
  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = `Producto: ${producto.nombre}, Precio: $${producto.precio}`
  lista.appendChild(nuevoItem);// Insertar el li en el ul
}

//?Eliminar producto: Cada producto en la lista debe tener un boton para eliminarlo.

const botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar";
botonEliminar.addEventListener("click", function () {
  nuevoItem.remove();
})

//Editar producto: Cada producto en la lista tendrá un botón "Editar". Al hacer clic, los datos del producto se cargarán en el formulario para ser modificados. Luego de editar, el usuario podrá guardar los cambios.