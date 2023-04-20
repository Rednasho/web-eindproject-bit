import fetchJSON from './fetchjson.js';
import modalControl from './cartmodal.js';
import addCart from './addcart.js';

const productView = document.querySelector('.product');

viewProduct();
modalControl();

async function viewProduct() {
    const params = new URLSearchParams(window.location.search);

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
        if (params.get("productid")) {
            if (params.get("productid") == product.id) {
                let productCart = document.createElement('div');
                let productBrand = document.createElement('h2');
                let productType = document.createElement('p');
                let productYear = document.createElement('p');
                let productHP = document.createElement('p');
                let productImg = document.createElement('img');
                let productPrice = document.createElement('p');
                let productSpecs = document.createElement('div');
                let productDiv = document.createElement('div');
                let productAdd = document.createElement('button');

                productSpecs.setAttribute('class', 'productspecs');
                productDiv.setAttribute('class', 'pricebox');
                productCart.setAttribute('class', 'viewproduct');
                productAdd.setAttribute('id', 'addcart');

                productImg.src = product.image;
                productBrand.innerText = product.brand;
                productType.innerHTML = `<span>Type</span> ${product.type}`;
                productYear.innerHTML = `<span>Year</span> ${product.year}`;
                productHP.innerHTML = `<span>Horsepower</span> ${product.hp}`;
                productPrice.innerText = `€${product.price}`;
                productAdd.innerHTML = `Add to cart <i class="fa-sharp fa-solid fa-cart-shopping"></i>`;

                productCart.appendChild(productImg);
                productSpecs.appendChild(productBrand);
                productSpecs.appendChild(productType);
                productSpecs.appendChild(productYear);
                productSpecs.appendChild(productHP);
                productDiv.appendChild(productPrice);
                productSpecs.appendChild(productDiv);
                productSpecs.appendChild(productAdd);
                productCart.appendChild(productSpecs);
                productView.appendChild(productCart);

                addCart(productAdd, product);
            }
        }
    });
}