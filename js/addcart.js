function addCart(productAdd, product) {
    const addCartBtn = document.querySelector('#addcart');
    addCartBtn.addEventListener('click', () => {
        let cart = localStorage.getItem('cart');
        let cartObject = {
            brand: product.brand, type: product.type, price: product.price, amount: 1, totalprice: product.price,
        };
        let cartItemExists = false;
        if (!cart) {
            cart = [cartObject];
        } else {
            cart = JSON.parse(cart);
            cart.forEach(cartItem => {
                if (cartItem.brand == cartObject.brand &&
                    cartItem.type == cartObject.type && cartItem.price == cartObject.price) {
                    cartItem.amount += parseInt(1);
                    cartItem.totalprice = parseInt(cartItem.totalprice);
                    cartItem.totalprice += parseInt(cartObject.price);
                    cartItemExists = true;
                }
            });
            if (!cartItemExists) {
                cart.push(cartObject);
            }
        }
        cart.forEach(cartItem => {
            if (cartItem.brand == cartObject.brand &&
                cartItem.type == cartObject.type &&
                cartItem.price == cartObject.price) {
                productAdd.innerText = `${cartItem.amount} of these items in cart!`;
            }
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    });
}

export default addCart;