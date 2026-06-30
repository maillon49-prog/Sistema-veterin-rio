const Nome_do_Usuario = document.getElementById("nomeUsuario");
const senha_do_Usuario = document.getElementById("senhaUsuario");

const botaoLogin = document.getElementById("botaoLogin");

let usuarios = [
    {
        perfil: "maillon",
        senha: "123"
    },
    {
        perfil: "julia",
        senha: "456"
    }
];

botaoLogin.addEventListener("click", function() {
    for (let i = 0; i < usuarios.length; i++) {
        if (Nome_do_Usuario.value === usuarios[i].perfil && senha_do_Usuario.value === usuarios[i].senha) {
            alert("Login bem-sucedido! Bem-vindo, " + usuarios[i].perfil + "!");
            window.location.href = "menu.html";
            return;
        } else alert("Nome de usuário ou senha incorretos. Tente novamente.");
        return;
    }

});
