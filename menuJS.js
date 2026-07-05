function abrirTela(nomeTela) {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("cadastroPet").style.display = "none";
    document.getElementById("ConsultarPets").style.display = "none";
    document.getElementById("EstoqueRemedios").style.display = "none";

    document.getElementById(nomeTela).style.display = "block";
}

const LimparStorageDePets = document.getElementById("limparConsultaPets");

function ExcluirStorageDePets() {
    localStorage.removeItem("pets");
    pets = [];
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

let pets = JSON.parse(localStorage.getItem("pets")) || [];

function cadastrarPet() {

    for (let i = 0; i < pets.length; i++) {
    if (nome_Pet.value.trim() == "" ||
        especie_Pet.value.trim() == "" ||
        raca_Pet.value.trim() == "" ||
        idade_Pet.value.trim() == "" ||
        dono_Pet.value.trim() == "") {
            alert("Por favor, preencha todos os campos antes de cadastrar o pet.");
            return;
    }

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
}

botaoCadastrarPet.addEventListener("click", cadastrarPet);

function exibirPets() {
    listaPets.innerHTML = "";

    pets = JSON.parse(localStorage.getItem("pets")) || [];

    for (let i = 0; i < pets.length; i++) {
        listaPets.innerHTML +=
        `
        <div class="pet-card">
            <h3>${pets[i].nome}</h3>
            <p>Espécie: ${pets[i].especie}</p>
            <p>Raça: ${pets[i].raca}</p>
            <p>Idade: ${pets[i].idade}</p>
            <p>Dono: ${pets[i].dono}</p>
            <hr>
        </div>
        `;
    }
}

botaoConsultarPets.addEventListener("click", exibirPets);
