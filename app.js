function login() {
    let gmail = document.getElementById("userName");
    let pasword = document.getElementById("pwd");
    
    let userscounts = [
        {name:'santiago',gmail:'santimona1@gmail.com',pasword:'123'},
        {name:'salome',gmail:'s.mona2192@gmail.com',pasword:'123'},
        {name:'olga',gmail:'olga@gmail.com',pasword:'123'},
        {name:'a',gmail:'a',pasword:'123'}
    ]
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    

    if (! gmail.value.match(mailformat) ) {
        advertencia.innerHTML=" HEMOS ENTRADO "

    }
     if(gmail){
        let advertencia = document.getElementById("advertencia")
        gmail.classList.add("is-valid")
        advertencia.innerHTML="el correo o la contraseña no coinciden"
    } 
    userscounts.forEach(function(user) {
        if (gmail.value===user.gmail && pasword.value===user.pasword) {
            sessionStorage.setItem('nombre',user.name);
            location.href = "pages/home.html";
            
        }
    })

}

