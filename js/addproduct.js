const formEL = document.querySelector('form');
const section = document.querySelector('.productform');
const error = document.createElement('p');

addProduct();

function addProduct() {
    formEL.addEventListener('submit', e => {
        e.preventDefault();

        let products = localStorage.getItem('products');

        const brand = formEL.elements['brand'].value;
        const type = formEL.elements['type'].value;
        const year = formEL.elements['year'].value;
        const horsepower = formEL.elements['horsepower'].value;
        const price = formEL.elements['price'].value;
        const image = formEL.elements['image-url'].value;

        let Object = {
            id: 0, brand: brand, type: type, year: year, hp: horsepower, image: image, price: price,
        };

        if (brand.trim().length > 0 && type.trim().length > 0 &&
            year.trim().length > 0 && horsepower.trim().length > 0 &&
            image.trim().length > 0 && price.trim().length > 0) {
            if (products) {
                products = JSON.parse(products);
                if (products.length < 1) {
                    products.push(Object);
                } else {
                    let lastProduct = products[products.length - 1];
                    Object.id += lastProduct.id + 1;
                    products.push(Object);
                }
                localStorage.setItem('products', JSON.stringify(products));
            }
            formEL.submit();
        } else {
            error.innerText = 'Fill in all fields!';
            error.style.color = 'red';
            error.setAttribute('class', 'error');
            section.appendChild(error);
        }
    });
}
