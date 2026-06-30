function abrirTela(nomeTela) {
    document.getElementById("cadastroPet").style.display = "none";
    document.getElementById("ConsultarPets").style.display = "none";
    document.getElementById("EstoqueRemedios").style.display = "none";

    document.getElementById(nomeTela).style.display = "block";
}