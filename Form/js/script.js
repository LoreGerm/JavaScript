function Occhio(){
    if (document.getElementById("occhio").classList.contains('bi-eye-fill')){
        document.getElementById("occhio").className = "by bi-eye-slash-fill";
        document.getElementById("password").type = "text";
    }
    else{
        document.getElementById("occhio").className = "by bi-eye-fill";
        document.getElementById("password").type = "password";
    }

}