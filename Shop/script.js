const ADMIN_KEY = "SNOW-ADMIN-2025";
let isAdmin = localStorage.getItem("isAdmin") === "true";

const productsData = [
    {
        id: 1,
        name: "Gaming Headset",
        price: 120,
        img: "https://avatars.mds.yandex.net/i?id=d17902ddfde0f5de9755741260bf829fddc24820-5042325-images-thumbs&n=13",
        desc: "Игровая гарнитура с объёмным звуком, шумоподавлением и RGB-подсветкой.",
        tags: "Headphones",
        qty: 0
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 180,
        img: "https://avatars.mds.yandex.net/i?id=e7a4802dce8e9fc9e274b0aea763c888a53e487d-5450680-images-thumbs&n=13",
        desc: "Механическая клавиатура с тактильными свитчами и металлическим корпусом.",
        tags:"Keyboard",
        qty: 0
    },
    {
        id: 3,
        name: "4K Monitor",
        price: 450,
        img: "https://avatars.mds.yandex.net/i?id=cdc31f931b37aef0403de2eb02c9fdaff5bbf39b-5124559-images-thumbs&n=13",
        desc: "27-дюймовый 4K монитор с IPS матрицей и высокой цветопередачей.",
        tags:"Monitor",
        qty: 0
    },
    {
        id: 4,
        name: "Gaming Pc",
        price: 700,
        img: "https://avatars.mds.yandex.net/i?id=0b2651dca09de35c7b33eb13bb4dcdc81905e473-7546766-images-thumbs&n=13",
        desc: "Игровой компьютер с тактильным дизайном и металлическим корпусом.",
        tags:"Gaming Pc",
        qty: 0
    },
    {
        id: 5,
        name: "Gaming Laptop",
        price: 1500,
        img: "https://avatars.mds.yandex.net/i?id=5f1c33b2cddd69c967c95fcac67263aae2c81abb-4119342-images-thumbs&n=13",
        desc: "Игровой ноутбук с тактильным дизайном и металлическим корпусом.",
        tags: "gaming laptop",
        qty: 0
    },
    {
        id: 6,
        name: "Gaming Chair",
        price: 300,
        img: "https://avatars.mds.yandex.net/i?id=540be1e99c1d65edbde4c3d264e278490058c955-4535697-images-thumbs&n=13",
        desc: "Мягкий игровой стул с кожанной поверхностью и комплектом подушек.",
        tags: "gaming chair",
        qty: 0
    },
    {
        id: 7,
        name: "Nintendo Switch 2",
        price: 550,
        img: "https://avatars.mds.yandex.net/i?id=236da8fb245609c765f2d5f53fb33b87bebfb2ce-11481522-images-thumbs&n=13",
        desc: "The Nintendo Switch is a hybrid video game console developed by Nintendo, released in most regions on June 5, 2025.",
        tags: "Console",
        qty: 0
    },
    {
        id: 8,
        name: "GTPLAYER Gaming Chair",
        price: 250,
        img: "https://avatars.mds.yandex.net/i?id=b4f51c178dd42a415b91dca5cb35c2f1365a4674-5693717-images-thumbs&n=13",
        desc: "The GTPLAYER Gaming Chair stands as a testament to the evolving landscape of ergonomic design in the realm of gaming and office furniture.",
        tags:"gaming chair",
        qty: 0
    },
    {
        id: 9,
        name: "Marvel Avengers Gaming Chair",
        price: 350,
        img: "https://avatars.mds.yandex.net/i?id=4e76a466a5597f77d8756cf6ff020bdc3e2c23c6-13083186-images-thumbs&n=13",
        desc: "The Nintendo Switch is a hybrid video game console developed by Nintendo, released in most regions on June 5, 2025.",
        tags: "Gaming chair",
        qty: 0
    },
    {
        id: 10,
        name: "Homall Gaming Chair",
        price: 155,
        img: "https://avatars.mds.yandex.net/i?id=73271c1c881a7b737f0511a4980a1cff9eabd2e5-17508860-images-thumbs&n=13",
        desc: "The Homall Gaming Chair is a testament to the fusion of comfort, style, and ergonomic design in the realm of gaming and office furniture.",
        tags: "Gaming chair",
        qty: 0
    },
    {
        id: 11,
        name: "LEMBERI Video Game Chair",
        price: 300,
        img: "https://avatars.mds.yandex.net/i?id=472a15b36aa92957600fe41c2a2ae776d9e925c4-4482678-images-thumbs&n=13",
        desc: "The LEMBERI Video Game Chairs cater to the needs of big and tall gamers, offering a combination of robust design, comfort, and immersive features.",
        tags: "Gaming chair",
        qty:0
    },
    {
        id: 12,
        name: "JHK Gaming Computer Office Ergonomic Desk Chair",
        price: 150,
        img: "https://avatars.mds.yandex.net/i?id=ecfe97b4815fcabc21b217a67474f64d-5827144-images-thumbs&n=13",
        desc: "The JHK Gaming Computer Office Ergonomic Desk Chair combines functionality and comfort to meet the demands of both gaming enthusiasts and professionals.",
        tags: "Gaming chair",
        qty: 0
    }
];

const productsEl = document.getElementById("products");
const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");
const cartCount = document.getElementById("cartCount");
const orderBtn = document.getElementById("orderBtn");

const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");

const filterBtn = document.getElementById("filterBtn");
const filterModal = document.getElementById("filterModal");
const applyFilter = document.getElementById("applyFilter");
const closeFilter = document.getElementById("closeFilter");
const resetFilter = document.getElementById("resetFilter");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.onclick = () => {
    const text = searchInput.value.toLowerCase();

    const filtered = productsData.filter(p => {
        return p.name.toLowerCase().includes(text);
    });

    renderProducts(filtered);
};

searchInput.addEventListener("keypress", e => {
    if (e.key === "Enter") searchBtn.click();
});

function renderProducts(list) {
    productsEl.innerHTML = "";

    list.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${p.img}" class="product-main-image" alt="${p.name}">

            <h3>${p.name}</h3>
            <p>${p.price} $</p>

            <div class="cart-controls">
                <button class="minus">−</button>
                <span class="qty">${p.qty}</span>
                <button class="plus">+</button>
            </div>

            <button class="view-btn">Посмотреть</button>
        `;

        card.querySelector(".plus").onclick = () => {
            p.qty++;
            card.querySelector(".qty").textContent = p.qty;
            updateCart();
        };

        card.querySelector(".minus").onclick = () => {
            if (p.qty > 0) {
                p.qty--;
                card.querySelector(".qty").textContent = p.qty;
                updateCart();
            }
        };

        card.querySelector(".view-btn").onclick = () => {
            window.location.href = `product.html?id=${p.id}`;
        };

        productsEl.appendChild(card);
    });
}

renderProducts(productsData);

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    let count = 0;

    productsData.forEach(p => {
        if (p.qty > 0) {
            total += p.qty * p.price;
            count += p.qty;

            const item = document.createElement("div");
            item.className = "cart-item";
            item.innerHTML = `
                <img src="${p.img}" alt="${p.name}">
                <div>
                    <b>${p.name}</b><br>
                    ${p.qty} × ${p.price} $
                </div>
                <button class="remove-item">✕</button>
            `;

            item.querySelector(".remove-item").onclick = () => {
                p.qty = 0;
                renderProducts(productsData);
                updateCart();
            };

            cartItems.appendChild(item);
        }
    });

    totalPriceEl.textContent = total;
    cartCount.textContent = count;
}

orderBtn.onclick = () => {
    const orderList = productsData.filter(p => p.qty > 0);

    if (orderList.length === 0) {
        alert("Корзина пуста");
        return;
    }

    localStorage.setItem("orderList", JSON.stringify(orderList));
    window.location.href = "order.html";
};

cartBtn.onclick = () => cartModal.classList.remove("hidden");
closeCart.onclick = () => cartModal.classList.add("hidden");

filterBtn.onclick = () => filterModal.classList.remove("hidden");
closeFilter.onclick = () => filterModal.classList.add("hidden");

resetFilter.onclick = () => {
    renderProducts(productsData);
    filterModal.classList.add("hidden");
};

applyFilter.onclick = () => {
    const text = document.getElementById("filterText").value.toLowerCase();
    const tag = document.getElementById("filterTag").value.toLowerCase();

    const filtered = productsData.filter(p => {
        const descMatch = text
            ? p.desc.toLowerCase().includes(text)
            : true;

        const tagMatch = tag
            ? p.tags && p.tags.toLowerCase().includes(tag)
            : true;

        return descMatch && tagMatch;
    });

    renderProducts(filtered);
    filterModal.classList.add("hidden");
};



