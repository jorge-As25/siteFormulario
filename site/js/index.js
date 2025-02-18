function logar(){
    var usuario = document.getElementById('usuario').value;

    var senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == 'admin'){
        alert('Login OK')
        location.href = './html/home.html';
    }else{
        alert('Tente novamente')
    }

}