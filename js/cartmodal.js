const cartModal = document.querySelector('.cartmodal');
const modalCard = document.querySelector('.modalcard');
const openModal = document.querySelector('#openmodal');

function modalControl() {
    openModal.addEventListener('click', () => {
        cartModal.style.display = 'flex';

        const checkoutBtn = document.createElement('button');
        checkoutBtn.setAttribute('id', 'checkout');
        checkoutBtn.innerText = 'Checkout';

        const closeBtn = document.createElement('button');
        closeBtn.setAttribute('id', 'closemodal');
        closeBtn.innerHTML = '<i class="fa-solid fa-x"></i>';

        const clearBtn = document.createElement('button');
        clearBtn.setAttribute('id', 'clearcart');
        clearBtn.innerHTML = 'Clear Cart <i class="fa-solid fa-trash"></i>';

        modalCard.appendChild(closeBtn);
        modalCard.appendChild(checkoutBtn);
        modalCard.appendChild(clearBtn);

        let cart = localStorage.getItem('cart');
        clearCart();
        if (cart) {
            cart = JSON.parse(cart);

            const cartProducts = document.createElement('table');
            cartProducts.innerHTML += '<thead><th>Product</th><th>Total Price</th><th>Amount</th></thead>';
            let grandTotal = parseInt(0);
            let grandTotalEL = document.createElement('tr');
            grandTotalEL.setAttribute('class', 'grandtotal');

            cart.forEach(product => {
                let productDetails = document.createElement('tr');
                productDetails.innerHTML += `<td>${product.brand} ${product.type}</td>`;
                productDetails.innerHTML += `<td>€${product.totalprice}</td>`;
                productDetails.innerHTML += `<td>${product.amount}</td>`;
                cartProducts.appendChild(productDetails);
                modalCard.appendChild(cartProducts);
                grandTotal += parseInt(product.totalprice);
            });

            grandTotalEL.innerHTML = `<td>€${grandTotal}</td>`;
            cartProducts.appendChild(grandTotalEL);
            cartProducts.innerHTML += '</tbody';
            checkout(cart, grandTotal);
        } else {
            modalCard.innerHTML += '<p>Cart is empty!</p>';
        }
        closeModal();
    });
}

function closeModal() {
    const closeModalEL = document.querySelector('#closemodal');
    closeModalEL.addEventListener('click', () => {
        cartModal.style.display = 'none';
        modalCard.innerHTML = '';
    });
}

function checkout(cart, grandTotal) {
    const checkoutBtn = document.querySelector('#checkout');
    checkoutBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
        modalCard.innerHTML = '';
        let orders = localStorage.getItem('orders');
        let currentDate = new Date();
        let dateAndTime = `${currentDate.getDate()}/${currentDate.getMonth() + parseInt(1)}/`;
        dateAndTime += `${currentDate.getFullYear()}`;
        dateAndTime += ` ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
        let orderObject = {
            orderid: 0, grandtotal: grandTotal, datetime: dateAndTime,
        };
        if (!orders) {
            orders = [orderObject];
        } else {
            orders = JSON.parse(orders);
            let lastOrder = orders[orders.length - 1];
            orderObject.orderid += lastOrder.orderid + 1;
            orders.push(orderObject);
        }

        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.removeItem('cart');
    });
}

function clearCart() {
    const clearBtn = document.querySelector('#clearcart');
    clearBtn.addEventListener('click', () => {
        localStorage.removeItem('cart');
        cartModal.style.display = 'none';
        modalCard.innerHTML = '';
    });
}


export default modalControl;