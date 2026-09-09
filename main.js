// ===============================
// 1. MOBILE MENU
// ===============================

const menuBtn = document.querySelector("#menu-btn");
const navList = document.querySelector(".navlist");

menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navList.classList.toggle("active");
});


// ===============================
// 2. ADD TO CART
// ===============================

const cartCount = document.querySelector("#cart-count");
const cartButtons = document.querySelectorAll(".add-to-cart");

let cart = 0;

cartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        cart++;

        // Cart number update
        cartCount.textContent = cart;

        // Button text change
        button.textContent = "Added ✓";

        // 1 second baad wapas
        setTimeout(() => {
            button.textContent = "Add to Cart";
        }, 1000);

    });

});


// ===============================
// 3. SEARCH PRODUCT
// ===============================

const searchBtn = document.querySelector("#search-btn");
const cards = document.querySelectorAll(".card");

searchBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const search = prompt("Search product:");

    if (search === null) {
        return;
    }

    const searchText = search.toLowerCase();

    cards.forEach((card) => {

        const title = card.querySelector(".title");

        if (!title) {
            return;
        }

        const productName = title.textContent.toLowerCase();

        if (productName.includes(searchText)) {
            card.style.display = "block";
        } 
        else {
            card.style.display = "none";
        }

    });

});


// ===============================
// 4. SALE COUNTDOWN
// ===============================

const saleTime = document.querySelector("#sale-time");

let time = 2 * 60 * 60; // 2 hours

setInterval(() => {

    let hours = Math.floor(time / 3600);

    let minutes = Math.floor((time % 3600) / 60);

    let seconds = time % 60;

    saleTime.textContent =
        String(hours).padStart(2, "0") + " : " +
        String(minutes).padStart(2, "0") + " : " +
        String(seconds).padStart(2, "0");

    if (time > 0) {
        time--;
    }

}, 1000);


// ===============================
// 5. CHECK PRODUCTS
// ===============================

console.log("Fashion website loaded!");

console.log("Total products:", cards.length);









