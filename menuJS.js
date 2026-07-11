function abrirTela(nomeTela) {
    if (petEditando !== null && nomeTela !== "cadastroPet") {
        alert("Você está editando um pet. Por favor, salve ou cancele a edição antes de navegar para outra tela.");
        return;
    }

    document.getElementById("inicio").style.display = "none";
    document.getElementById("cadastroPet").style.display = "none";
    document.getElementById("ConsultarPets").style.display = "none";
    document.getElementById("CadastrarRemedios").style.display = "none";
    document.getElementById("EstoqueRemedios").style.display = "none";

    document.getElementById(nomeTela).style.display = "block";
}

const LimparStorageDePets = document.getElementById("limparConsultaPets");

function ExcluirStorageDePets() {
    localStorage.removeItem("pets");
    pets = [];
    exibirPets();
    alert("Todos os pets foram removidos com sucesso!");
}

LimparStorageDePets.addEventListener("click", ExcluirStorageDePets);



const nome_Pet = document.getElementById("nomePet");
const especie_Pet = document.getElementById("especie");
const raca_Pet = document.getElementById("raca");
const idade_Pet = document.getElementById("idade");
const dono_Pet = document.getElementById("dono");

const botaoCadastrarPet = document.getElementById("botaoCadastrarPet");
const botaoConsultarPets = document.getElementById("botaoConsultarPets");

const listaPets = document.getElementById("listaPets");

const botaoCancelamentoEdicao = document.getElementById("botaoCancelamentoEdicao");

let pets = JSON.parse(localStorage.getItem("pets")) || [];

function cadastrarPet() {

    if (nome_Pet.value.trim() == "" ||
        especie_Pet.value.trim() == "" ||
        raca_Pet.value.trim() == "" ||
        idade_Pet.value.trim() == "" ||
        dono_Pet.value.trim() == "") {
            alert("Por favor, preencha todos os campos antes de cadastrar o pet.");
            return;
    }

    if (petEditando !== null) {

        pets[petEditando] = {
            nome: nome_Pet.value.trim(),
            especie: especie_Pet.value.trim(),
            raca: raca_Pet.value.trim(),
            idade: idade_Pet.value.trim(),
            dono: dono_Pet.value.trim()
        };

        localStorage.setItem("pets", JSON.stringify(pets));

        petEditando = null;

        alert("Pet editado com sucesso!");
        return;
    } else

    for (let i = 0; i < pets.length; i++) {
        if (nome_Pet.value === pets[i].nome &&
            especie_Pet.value === pets[i].especie &&
            raca_Pet.value === pets[i].raca &&
            idade_Pet.value === pets[i].idade &&
            dono_Pet.value === pets[i].dono) {
                alert("Este pet já está cadastrado.");
                return;
        }
    }

    const novosPet = {
        nome: nome_Pet.value,
        especie: especie_Pet.value,
        raca: raca_Pet.value,
        idade: idade_Pet.value,
        dono: dono_Pet.value
    }

    pets.push(novosPet);
    localStorage.setItem("pets", JSON.stringify(pets));

    alert("Pet cadastrado com sucesso!");


}

botaoCadastrarPet.addEventListener("click", cadastrarPet);

function exibirPets() {
    listaPets.innerHTML = "";

    pets = JSON.parse(localStorage.getItem("pets")) || [];

    for (let i = 0; i < pets.length; i++) {
        listaPets.innerHTML +=

        `<div class="pet-card">
            <h3>${pets[i].nome}</h3>
            <p>Espécie: ${pets[i].especie}</p>
            <p>Raça: ${pets[i].raca}</p>
            <p>Idade: ${pets[i].idade}</p>
            <p>Dono: ${pets[i].dono}</p>
            <button class="botaoEditar" onclick="editarPet(${i})">Editar</button>
            <button class="botaoExcluir" onclick="excluirPet(${i})">Excluir</button>
            <hr>
        </div>`;
    }
}

botaoConsultarPets.addEventListener("click", exibirPets);

function cancelarEdicao() {
    petEditando = null;

    nome_Pet.value = "";
    especie_Pet.value = "";
    raca_Pet.value = "";
    idade_Pet.value = "";
    dono_Pet.value = "";

    botaoCadastrarPet.textContent = "Cadastrar Pet";

    botaoCancelamentoEdicao.innerHTML = "";

    abrirTela("inicio");

    alert("Edição cancelada com sucesso!");

}

let petEditando = null;

function editarPet(index) {
    petEditando = index;

    const petEscolhido = pets[index];

    nome_Pet.value = petEscolhido.nome;
    especie_Pet.value = petEscolhido.especie;
    raca_Pet.value = petEscolhido.raca;
    idade_Pet.value = petEscolhido.idade;
    dono_Pet.value = petEscolhido.dono;

    abrirTela("cadastroPet");

    botaoCadastrarPet.textContent = "Salvar Alterações";

    botaoCancelamentoEdicao.innerHTML = "";

    botaoCancelamentoEdicao.innerHTML = `<button id="botaoCancelarEdicao"
                                        onclick="cancelarEdicao()">Cancelar Edição</button>`;

}
