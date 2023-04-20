const formEL = document.querySelector('form');
const section = document.querySelector('.productform');
const error = document.createElement('p');

editProduct();

function editProduct() {
    const params = new URLSearchParams(window.location.search);

    let products = localStorage.getItem('products');
    if (products) {
        products = JSON.parse(products);
        products.forEach(product => {
            if (params.get('id')) {
                if (params.get('id') == product.id) {
                    formEL.elements['brand'].value = product.brand;
                    formEL.elements['type'].value = product.type;
                    formEL.elements['year'].value = product.year;
                    formEL.elements['horsepower'].value = product.hp;
                    formEL.elements['price'].value = product.price;
                    formEL.elements['image-url'].value = product.image;
                    safeData(products, product);
                }
            }
        });
    }
}

function safeData(products, product) {
    formEL.addEventListener('submit', e => {
        e.preventDefault();

        const brand = formEL.elements['brand'].value;
        const type = formEL.elements['type'].value;
        const year = formEL.elements['year'].value;
        const horsepower = formEL.elements['horsepower'].value;
        const price = formEL.elements['price'].value;
        const image = formEL.elements['image-url'].value;

        let Object = {
            id: product.id, brand: brand, type: type, year: year, hp: horsepower, image: image, price: price,
        };

        if (brand.trim().length > 0 && type.trim().length > 0 &&
            year.trim().length > 0 && horsepower.trim().length > 0 &&
            image.trim().length > 0 && price.trim().length > 0) {
            let productIndex = products.indexOf(product);
            product = Object;
            products[productIndex] = product;
            localStorage.setItem('products', JSON.stringify(products));
            formEL.submit();
        } else {
            error.innerText = 'Fill in all fields!';
            error.style.color = 'red';
            error.setAttribute('class', 'error');
            section.appendChild(error);
        }
    });
}
