const jsonUrl = './car-products.json';

async function fetchJSON() {
    let response = await fetch(jsonUrl);
    let jsonData = await response.json();
    return jsonData;
}

export default fetchJSON;