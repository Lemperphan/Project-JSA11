function submit() {
    var email = document.getElementById("email");
    var pw = document.getElementById("pw");

    if (email.value.length == 0) {
        alert("Please enter your email");
    } else if (pw.value.length == 0) {
        alert("Please enter password");
    } else {
        let listUser = JSON.parse(localStorage.getItem("list-user"));
        for (let index = 0; index < listUser.length; index++) {
            const element = listUser[index];
            if (element.email == email.value && element.pw == pw.value) {
                localStorage.setItem("user", email.value);
                window.location.href = "../index.html";
                return;
            }
        }
        alert("Email or password is incorrect");
    }
}
