const Nome_do_Usuario = document.getElementById("nomeUsuario");
const senha_do_Usuario = document.getElementById("senhaUsuario");

const botaoLogin = document.getElementById("botaoLogin");
const botaoCadastro = document.getElementById("botaoCadastro");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

localStorage.setItem("usuarios", JSON.stringify(usuarios));

botaoLogin.addEventListener("click", function() {

    for (let i = 0; i < usuarios.length; i++) {
        if (Nome_do_Usuario.value === usuarios[i].perfil &&
            senha_do_Usuario.value === usuarios[i].senha) {
            alert("Login bem-sucedido! Bem-vindo, " + usuarios[i].perfil + "!");
            window.location.href = "menu.html";
            return;
        }
    }
    alert("Nome de usuário ou senha incorretos. Tente novamente.");
});


botaoCadastro.addEventListener("click", function() {
    {
    for (let i = 0; i < usuarios.length; i++) {
        if (Nome_do_Usuario.value === usuarios[i].perfil &&
            senha_do_Usuario.value === usuarios[i].senha) {
            alert("Usuário já cadastrado. Por favor, faça login.");
            return;
        }
    }
}

    const novoUsuario = {
        perfil: Nome_do_Usuario.value,
        senha: senha_do_Usuario.value
    }
    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso! Agora você pode fazer login.");
})

