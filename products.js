const product = [
    {
        name: "Rubie's Adult - Party Supplies, Multicolor",
        price: 9.99,
        image: "https://m.media-amazon.com/images/I/814WBwF9ApL._AC_SX679_.jpg",
    },
    {
        name: "Rubie's Pet Shop Flash Pet Costume, Small",
        price: 15,
        image: "https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3506138-Center-1",
    },
    {
        name: " amazon hot sale dogs halloween costume, dress wizard skirt",
        price: 15,
        image: "https://s.alicdn.com/@sc04/kf/Hda674f410c74407586ec46cc74f2e4f3m.jpg_220x220.jpg",
    },
    {
        name: "Pet Cat Christmas Halloween Cloak Cosplay Fancy ",
        price: 15,
        image: "https://s.alicdn.com/@sc04/kf/H9348e2689e5146d69dc8f5f4143d085dd.jpg_220x220.jpg",
    },
    {
        name: "Halloween Pumpkin Dog Neckties Bowties Collar Holidays Pet Cat Dog Ties",
        price: 8,
        image: "https://s.alicdn.com/@sc04/kf/H73958e27b6ac4ed8a12a263d1366bcddP.jpg_220x220.jpg",
    },
    {
        name: "Factory Wholesale Pet Clothing Green Cartoon Pet Dog Christmas Costume ",
        price: 36,
        image: "https://s.alicdn.com/@sc04/kf/H41299a2403ed40bd946211ebf54cbd8aS.jpg_220x220.jpg",
    },
    {
        name: "Costumes halloween for women, design with pumpkin",
        price: 11,
        image: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.15752-9/309433518_584394370104599_316830987575508791_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=fgVYzw8wjd8AX-Bz510&_nc_ht=scontent.fsgn2-8.fna&oh=03_AdTVrhDb6Ddc1_Bkj6_AfjW7ONli_Y50nKW2ROTjkkMWvg&oe=6371C616",
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
