let productos = [
    {
        nombre: "Arroz",
        precio: 1.50,
        descripcion: "Arroz blanco de primera calidad"
    },
    {
        nombre: "Azúcar",
        precio: 1.20,
        descripcion: "Azúcar refinada"
    }
];

const lista = document.getElementById("lista-productos");
const btnAgregar = document.getElementById("btnAgregar");

const inputNombre = document.getElementById("nombre");
const inputPrecio = document.getElementById("precio");
const inputDescripcion = document.getElementById("descripcion");

let indiceEdicion = null;

// Renderizar productos
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

// Agregar o actualizar producto
btnAgregar.addEventListener("click", () => {
    const nombre = inputNombre.value;
    const precio = inputPrecio.value;
    const descripcion = inputDescripcion.value;

    if (nombre === "" || precio === "" || descripcion === "") {
        alert("Complete todos los campos");
        return;
    }

    if (indiceEdicion === null) {
        productos.push({
            nombre,
            precio,
            descripcion
        });
    } else {
        productos[indiceEdicion] = {
            nombre,
            precio,
            descripcion
        };
        indiceEdicion = null;
        btnAgregar.textContent = "Agregar Producto";
    }

    inputNombre.value = "";
    inputPrecio.value = "";
    inputDescripcion.value = "";

    renderizarProductos();
});

// Cargar datos para editar
function editarProducto(index) {
    const producto = productos[index];

    inputNombre.value = producto.nombre;
    inputPrecio.value = producto.precio;
    inputDescripcion.value = producto.descripcion;

    indiceEdicion = index;
    btnAgregar.textContent = "Actualizar Producto";
}

// Renderizar al cargar la página
renderizarProductos();
