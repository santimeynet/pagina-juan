// const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
// 
// addToCartButtons.forEach(button => {
    // button.addEventListener('click', addToCart);
// });
// 
//Función para agregar un producto al carrito
// function addToCart(event) {
    // const productContainer = event.target.parentElement.parentElement;
    // const productName = productContainer.querySelector('p').textContent.split('\n')[0];
    // const productPrice = parseFloat(productContainer.querySelector('p').textContent.match(/\$\d+\.\d+/)[0].substring(1));
// 
    // const item = {
        // nombre: productName,
        // precio: productPrice
    // };
// 
    // addToLocalStorage(item);
// }
// 
//Función para agregar el item al Local Storage
// function addToLocalStorage(item) {
    // const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    // cartItems.push(item);
    // localStorage.setItem('cart', JSON.stringify(cartItems));
// }
// 

const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")

let carrito = [];

productos.forEach((product)=>{
    let content = document.createElement('div');
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;
    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";

    content.append(comprar)
    comprar.addEventListener("click", () =>{
        Swal.fire({
            icon: 'success',
            title: 'Agregado al carrito con exito',
            text: '¡Gracias por tu compra!',
          });
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if(repeat){
        carrito.map((prod) =>{
            if(prod.id === product.id){
                prod.cantidad++;
            }
        })
    }else{
        carrito.push({
            id : product.id,
            img : product.img,
            nombre : product.nombre,
            precio : product.precio,
            cantidad: product.cantidad,
        })
        
    }
    console.log(carrito)
    })
})

