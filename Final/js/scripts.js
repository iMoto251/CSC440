let user = document.querySelector('username');
let pass = document.querySelector('password');

function validateUsername(e){
    if (e != "")
        return true;
    else{
        var error = new Error('Invalid Username');
        console.log(error);
    }
}
function validatePassword(e){
    if (e != "")
        return true;
    else{
        var error = new Error('Invalid Password');
        console.log(error);
    }
}
function Submit(){
    console.log(user);
    console.log(pass);
}