document.addEventListener('DOMContentLoaded', function() {
    const cartItems = [
        { id: 1, name: 'T-shirt', price: 19.99, image: 'tshirt.jpg' },
        { id: 2, name: 'Jeans', price: 39.99, image: 'jeans.jpg' }
    ];

    const recommendedProducts = [
        { id: 3, name: 'Jacket', price: 59.99, image: 'jacket.jpg' },
        { id: 4, name: 'Sneakers', price: 49.99, image: 'sneakers.jpg' }
    ];

    function renderCartItems() {
        const cartContainer = document.getElementById('cart-items');
        cartContainer.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            const itemImage = document.createElement('img');
            itemImage.src = item.image;
            itemImage.alt = item.name;

            const itemName = document.createElement('h4');
            itemName.textContent = item.name;

            const itemPrice = document.createElement('p');
            itemPrice.textContent = `$${item.price.toFixed(2)}`;

            cartItem.appendChild(itemImage);
            cartItem.appendChild(itemName);
            cartItem.appendChild(itemPrice);

            cartContainer.appendChild(cartItem);

            total += item.price;
        });

        document.getElementById('total-amount').textContent = total.toFixed(2);
    }

    function renderRecommendedProducts() {
        const recommendedContainer = document.getElementById('recommended-products');
        recommendedContainer.innerHTML = '';

        recommendedProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;

            const productName = document.createElement('h4');
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price.toFixed(2)}`;

            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to Cart';
            addToCartButton.addEventListener('click', function() {
                cartItems.push(product);
                renderCartItems();
            });

            productItem.appendChild(productImage);
            productItem.appendChild(productName);
            productItem.appendChild(productPrice);
            productItem.appendChild(addToCartButton);

            recommendedContainer.appendChild(productItem);
        });
    }

    renderCartItems();
    renderRecommendedProducts();
});
