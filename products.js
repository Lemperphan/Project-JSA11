const product = [
    {
        name: "Crocs Jibbitz 5-Pack Holiday Shoe Charms | Jibbitz for Crocs",
        price: 9.99,
        image: "https://m.media-amazon.com/images/I/719-HvMqpwL._AC_UL320_.jpg",
    },
    {
        name: "Rubie's unisex adult Plastic Witch Kettle Costume Accessory",
        price: 15,
        image: "https://m.media-amazon.com/images/I/617p4AcvT7L._AC_UL320_.jpg",
    },
    {
        name: "Department 56 Halloween Accessories",
        price: 15,
        image: "https://m.media-amazon.com/images/I/71+sLscGBcL._AC_UL320_.jpg",
    },
    {
        name: "Rubie's Harley Quinn Mallet Costume Accessory",
        price: 15,
        image: "https://m.media-amazon.com/images/I/81Bo6pCUweL._AC_UL320_.jpg",
    },
    {
        name: "Leg Avenue womens Over the Knee Halloween Socks",
        price: 8,
        image: "https://m.media-amazon.com/images/I/61itwruo-wL._AC_UL320_.jpg",
    },
    {
        name: "Department 56 Village Cross Product Accessories ",
        price: 36,
        image: "https://m.media-amazon.com/images/I/4141zU4ZvDL._AC_UL320_.jpg",
    },
    {
        name: "Disguise Men's Radioactive Glowing Syringe Costume",
        price: 11,
        image: "https://m.media-amazon.com/images/I/71jBphSsZIL._AC_UL320_.jpg",
    },
    {
        name: "Department 56 Village Halloween Accessories",
        price: 27,
        image: "https://m.media-amazon.com/images/I/71wdcoegIrL._AC_UL320_.jpg",
    },
];

for (let index = 0; index < product.length; index++) {
    const element = product[index];
    document.getElementById("products")?.insertAdjacentHTML(
        "beforeend",
        `
            <div class="product" id="product-${index}">
                <img src="${element.image}" alt="">
                <h2>${element.name}</h2>
                <span>${element.price} $</span>
                <button>Add to cart</button>
            </div>
        `
    );

    document
        .querySelector("#product-" + index + " button")
        ?.addEventListener("click", function (e) {
            if (!user) {
                alert("Please login to add to cart");
                return;
            }

            let listCart = JSON.parse(localStorage.getItem("list-cart")) || [];
            listCart.push({
                name: element.name,
                price: element.price,
                image: element.image,
            });
            localStorage.setItem("list-cart", JSON.stringify(listCart));
            alert("Added " + element.name + " to cart");
        });
}
