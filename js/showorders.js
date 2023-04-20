const shopData = document.querySelector('.shop-data');
const tableEL = document.querySelector('table');

showOrders();

function showOrders() {
    let orders = localStorage.getItem('orders');
    if (orders) {
        orders = JSON.parse(orders);
        orders.forEach(order => {
            let orderRow = document.createElement('tr');
            let orderId = document.createElement('td');
            let orderTotal = document.createElement('td');
            let orderDate = document.createElement('td');

            orderId.innerText = order.orderid;
            orderTotal.innerText = order.grandtotal;
            orderDate.innerText = order.datetime;

            orderRow.appendChild(orderId);
            orderRow.appendChild(orderTotal);
            orderRow.appendChild(orderDate);

            tableEL.appendChild(orderRow);
        });
        tableEL.innerHTML += '</tbody>';
    }
}
