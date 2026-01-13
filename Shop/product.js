const productsData = JSON.parse(localStorage.getItem("products")) || [];
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));
const product = productsData.find(p => p.id === productId);

const productNameEl = document.getElementById("productName");
const productPriceEl = document.getElementById("productPrice");
const productDescEl = document.getElementById("productDesc");
const mainImageEl = document.getElementById("mainImage");
const addToCartBtn = document.getElementById("addToCart");

if (!product) {
    document.body.innerHTML = `
        <h2 style="text-align:center; margin-top:50px;">
            Товар не найден
        </h2>
    `;
} else {
    productNameEl.textContent = product.name;
    productPriceEl.textContent = product.price + " $";
    productDescEl.textContent = product.desc;

    mainImageEl.src = product.img;
    mainImageEl.alt = product.name;

    addToCartBtn.onclick = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existing = cart.find(p => p.id === product.id);

        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...product, qty: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Товар добавлен в корзину");
    };
}

