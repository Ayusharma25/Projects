const orderTableBody = document.getElementById('order-table-body');
const orders = JSON.parse(localStorage.getItem('orders')) || [];

const formatPrice = (price) => `Rs. ${Number(price).toFixed(2)}`;

const getOrderItems = (order) => Array.isArray(order) ? order : order.items;

const getOrderDate = (order) => {
    if (Array.isArray(order) || !order.createdAt) {
        return 'Recent order';
    }

    return new Date(order.createdAt).toLocaleString();
};

orderTableBody.innerHTML = '';

if (orders.length === 0) {
    orderTableBody.innerHTML = `
        <tr>
            <td colspan="4" class="empty-orders">No orders yet. Place an order from your cart to see it here.</td>
        </tr>`;
} else {
    orders.forEach((order, index) => {
        const items = getOrderItems(order) || [];
        const total = items.reduce((acc, orderItem) => acc + Number(orderItem.price) * orderItem.quantity, 0);

        orderTableBody.innerHTML += `
        <tr>
            <td>
                <div class="order-header">
                    <span class="order-number">Order #${index + 1}</span>
                    <span class="order-date">${getOrderDate(order)}</span>
                </div>
            </td>
            <td>
                <div class="order-details">
                    ${items.map(orderItem => `
                        <div class="order-details-item">
                            <span>${orderItem.title}</span>
                            <span><strong>Quantity:</strong> x${orderItem.quantity}</span>
                        </div>
                    `).join('')}
                </div>
            </td>
            <td>
                <div class="order-total">
                    Total: ${formatPrice(total)}
                </div>
            </td>
            <td>
                <span class="order-status status-delivered">
                    Confirmed
                </span>
            </td>
        </tr>`;
    });
}
