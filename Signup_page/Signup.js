

function submit() {
    let Aname = document.getElementById('Aname')
    var Fname = document.getElementById('Fname')
    var Lname = document.getElementById('Lname')
    var Mail = document.getElementById('mail')
    var Pw = document.getElementById('Pw')

    if(Aname.value.length == 0){
        alert('Please enter your account name');

    }else if(Fname.value.length == 0){
        alert('Please enter your first name');
    }
    else if(Lname.value.length == 0){
        alert('Please enter your last name');
    }
    else if(Mail.value.length == 0){
        alert('Please enter your email');
    }
    else if(Pw.value.length == 0){
        alert('Please enter password');
    }else{
        const user_acc = {
            acc_name : Aname.value,
            first_name : Fname.value,
            last_name : Lname.value,
            mail : Mail.value,
            password : Pw.value,
        }
        window.localStorage.setItem("user_acc", JSON.stringify(user_acc));
        window.location.href = "../Login_page/login.html"
    }
}
