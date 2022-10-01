function submit() {
    let email = document.getElementById('mail').value
    let password = document.getElementById('Pw').value
    let user_acc = JSON.parse(localStorage.getItem('user_acc')) 
    console.log (user_acc.mail)
    if (email.length == 0) {
        alert('Please enter your email');
    }else if (password.length == 0) {
        alert('Please enter your Password');
    }else {
        if (email == user_acc.mail && password == user_acc.password) {
            alert('Login successfully')
        }
    }
}