document.getElementById('addItemBtn').addEventListener('click', addItemToCart);

function addItemToCart() {
    const item = document.getElementById('item').value;
    const price = parseFloat(document.getElementById('price').value);

    if (item && !isNaN(price)) {
        const cartItems = document.getElementById('cartItems');
        const listItem = document.createElement('li');
        listItem.textContent = `${item} - R$${price.toFixed(2)}`;
        cartItems.appendChild(listItem);

        updateTotalPrice(price);
    }
}

function updateTotalPrice(price) {
    const totalPriceElement = document.getElementById('totalPrice');
    const currentTotal = parseFloat(totalPriceElement.textContent);
    const newTotal = currentTotal + price;
    totalPriceElement.textContent = newTotal.toFixed(2);
}
