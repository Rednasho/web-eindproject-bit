import fetchJSON from './fetchjson.js';
import modalControl from './cartmodal.js';

const productCarts = document.querySelector('.product-carts');

productList();
modalControl();

async function productList() {
    let jsonData = localStorage.getItem('products');
    if (!jsonData) {
        jsonData = await fetchJSON();
        let stringJson = JSON.stringify(jsonData);
        localStorage.setItem('products', stringJson);
    }
    if (typeof (jsonData) == 'string') {
        jsonData = JSON.parse(jsonData);
    }
    jsonData.forEach(product => {
        let productCart = document.createElement('div');
        let productBrand = document.createElement('h2');
        let productType = document.createElement('p');
        let productYear = document.createElement('p');
        let productHP = document.createElement('p');
        let productImg = document.createElement('img');
        let productPrice = document.createElement('p');
        let productView = document.createElement('a');
        let productDiv = document.createElement('div');

        productCart.setAttribute('class', 'product-cart');

        productImg.src = product.image;
        productBrand.innerText = product.brand;
        productType.innerHTML = `<span>Type</span> ${product.type}`;
        productYear.innerHTML = `<span>Year</span> ${product.year}`;
        productHP.innerHTML = `<span>Horsepower</span> ${product.hp}`;
        productPrice.innerText = `€${product.price}`;
        productView.innerText = 'View Product';
        productView.href = `product.html?productid=${product.id}`;

        productCart.appendChild(productImg);
        productCart.appendChild(productBrand);
        productCart.appendChild(productType);
        productCart.appendChild(productYear);
        productCart.appendChild(productHP);
        productCart.appendChild(productView);
        productDiv.appendChild(productPrice);
        productCart.appendChild(productDiv);
        productCarts.appendChild(productCart);
    });
}


