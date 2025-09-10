const orderTableBody = document.getElementById('order-table-body');
let orders = JSON.parse(localStorage.getItem('orders')) || [];

orderTableBody.innerHTML = ''; // Clear previous content

for (let i = 0; i < orders.length; i++) {
    orderTableBody.innerHTML += `
    <tr>
        <td>
            <div class="order-header">
                <span class="order-number">Order #${i + 1}</span>
            </div>
        </td>
        <td>
            <div class="order-details">
                ${orders[i].map(orderItem => `
                    <div class="order-details-item">
                        <span>${orderItem.title}</span>
                        <span><strong>Quantity:</strong> x${orderItem.quantity}</span>
                    </div>
                `).join('')}
            </div>
        </td>
        <td>
            <div class="order-total">
                Total: $${orders[i].reduce((acc, orderItem) => 
                    acc + orderItem.price * orderItem.quantity, 0)}
            </div>
        </td>
        <td>
            <span class="order-status status-delivered">
                Delivered             
            </span>
        </td>
    </tr>`;
}