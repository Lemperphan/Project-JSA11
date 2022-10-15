var counter = 1;
setInterval(function () {
    counter = counter + 1 <= 3 ? counter + 1 : 1;
    document.getElementById("radio" + counter).checked = true;
}, 5000);

if (user) {
    document.querySelector(".navbar a").innerHTML = user;
    document
        .querySelector(".navbar a")
        .insertAdjacentHTML(
            "afterend",
            `<a href="cart.html"><i class="fas fa-shopping-cart"></i></a>`
        );

    document.querySelector(".navbar a").addEventListener("click", function (e) {
        localStorage.removeItem("user");
        localStorage.removeItem("list-cart");
        window.location.href = "/index.html";
    });
}
