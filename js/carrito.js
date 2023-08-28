const pintarCarrito =  () => {

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class='modal-header-title'>Carrito</h1>

    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = 'modal-header-button'

    modalbutton.addEventListener("click", () =>{
        modalContainer.style.display = "none"
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div")
        carritoContent.className = 'modal-content';
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>USD$${product.precio}</p>
            <p>${product.cantidad}</p>
            <p>Total: $${product.precio * product.cantidad}</p>
        `;
        modalContainer.append(carritoContent);
        
        let eliminar = document.createElement("span");

        eliminar.className = "delete-product";
        eliminar.setAttribute("data-id", product.id);
        eliminar.innerText = "❌";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });



    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalComprado = document.createElement("div");
    totalComprado.className = 'total-content';
    totalComprado.innerHTML =`Total a pagar: USD$${total}`;
    modalContainer.append(totalComprado);
}

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (event) => {

    const idAEliminar = parseInt(event.target.getAttribute("data-id"));
    const indexAEliminar = carrito.findIndex((product) => product.id === idAEliminar);

    if (indexAEliminar !== -1) {
        if (carrito[indexAEliminar].cantidad > 1) {
            carrito[indexAEliminar].cantidad--;
        } else {
            carrito.splice(indexAEliminar, 1);
        }
    }

    pintarCarrito();
};
