const tableEL = document.querySelector('table');

showProducts();
resetProducts();

function showProducts() {
    let products = localStorage.getItem('products');
    if (products) {
        products = JSON.parse(products);

        products.forEach(product => {
            let productRow = document.createElement('tr');
            let productId = document.createElement('td');
            let productTotal = document.createElement('td');
            let productType = document.createElement('td');
            let productYear = document.createElement('td');
            let productHP = document.createElement('td');
            let productPrice = document.createElement('td');
            let productImage = document.createElement('td');
            let productRemove = document.createElement('td');
            let productEdit = document.createElement('td');

            let productRmBtn = document.createElement('button');
            let productEdBtn = document.createElement('a');

            productEdBtn.href = `./editproduct.html?id=${product.id}`;
            productEdBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
            productRmBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
            productRmBtn.setAttribute('id', 'removeproduct');


            productEdit.appendChild(productEdBtn);
            productRemove.appendChild(productRmBtn);

            productId.innerText = product.id;
            productTotal.innerText = product.brand;
            productType.innerText = product.type;
            productYear.innerText = product.year;
            productHP.innerText = product.hp;
            productPrice.innerText = product.price;
            productImage.innerText = product.image;

            productRow.appendChild(productId);
            productRow.appendChild(productTotal);
            productRow.appendChild(productType);
            productRow.appendChild(productYear);
            productRow.appendChild(productHP);
            productRow.appendChild(productPrice);
            productRow.appendChild(productImage);
            productRow.appendChild(productEdit);
            productRow.appendChild(productRemove);
            tableEL.appendChild(productRow);

            removeProduct(products, product, productRmBtn);
        });
    }
}

function removeProduct(products, product, productRm) {
    productRm.addEventListener('click', () => {
        const productIndex = products.indexOf(product);
        products.splice(productIndex, 1);
        localStorage.setItem('products', JSON.stringify(products));
        window.location.reload();
    });
}

async function resetProducts() {
    const response = await fetch('../car-products.json');
    const data = await response.json();
    const resetBtn = document.querySelector('#resetproducts');

    resetBtn.addEventListener('click', () => {
        localStorage.setItem('products', JSON.stringify(data));
        window.location.reload();
    });
}

