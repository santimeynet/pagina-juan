const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Función para agregar un producto al carrito
function addToCart(event) {
    const productContainer = event.target.parentElement.parentElement;
    const productName = productContainer.querySelector('p').textContent.split('\n')[0];
    const productPrice = parseFloat(productContainer.querySelector('p').textContent.match(/\$\d+\.\d+/)[0].substring(1));

    const item = {
        nombre: productName,
        precio: productPrice
    };

    addToLocalStorage(item);
}

// Función para agregar el item al Local Storage
function addToLocalStorage(item) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(item);
    localStorage.setItem('cart', JSON.stringify(cartItems));
}
