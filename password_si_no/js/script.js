function Occhio(){
    if (document.getElementById("password").type == "password"){
        document.getElementById("occhio").className = "by bi-eye-slash-fill";
        document.getElementById("password").type = "text";
    }
    else{
        document.getElementById("occhio").className = "by bi-eye-fill";
        document.getElementById("password").type = "password";
    }

}