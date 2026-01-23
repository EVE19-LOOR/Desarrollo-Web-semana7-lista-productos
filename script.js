let productos = [
    { nombre: "Arroz", precio: 1.50, descripcion: "Arroz blanco de primera calidad" },
    { nombre: "Azúcar", precio: 1.20, descripcion: "Azúcar refinada" }
];

const lista = document.getElementById("lista-productos");
const btnAgregar = document.getElementById("btnAgregar");

const nombreInput = document.getElementById("nombre");
const precioInput = document.getElementById("precio");
const descripcionInput = document.getElementById("descripcion");

let indiceEditar = -1;

// Renderizar lista de productos
function renderizarProductos() {
    lista.innerHTML = "";

    productos.forEach((producto, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}<br>
            <button onclick="editarProducto(${index})">Editar</button>
        `;

        lista.appendChild(li);
    });
}

// Agregar o editar producto
btnAgregar.addEventListener("click", () => {
    const nombre = nombreInput.value;
    const precio = precioInput.value;
    const descripcion = descripcionInput.value;

    if (indiceEditar === -1) {
        // Agregar producto al final
        productos.push({ nombre, precio, descripcion });
    } else {
        // Editar producto
        productos[indiceEditar] = { nombre, precio, descripcion };
        indiceEditar = -1;
        btnAgregar.textContent = "Agregar Producto";
    }

    nombreInput.value = "";
    precioInput.value = "";
    descripcionInput.value = "";

    renderizarProductos();
});

// Editar producto
function editarProducto(index) {
    const producto = productos[index];

    nombreInput.value = producto.nombre;
    precioInput.value = producto.precio;
    descripcionInput.value = producto.descripcion;

    indiceEditar = index;
    btnAgregar.textContent = "Actualizar Producto";
}

// Generar productos al cargar la página
renderizarProductos();
