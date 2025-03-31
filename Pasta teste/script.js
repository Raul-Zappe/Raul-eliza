{

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte= 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte+= 0.1;
        document.body.style.tamanhoAtualFonte = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte-= 0.1;
        document.body.style.tamanhoAtualFonte = `${tamanhoAtualFonte}rem`

    })

}

function showHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("houses").style.display = "none";
    document.getElementById("spells").style.display = "none";
    document.getElementById("gallery").style.display = "none";
}

function showHouses() {
    document.getElementById("home").style.display = "none";
    document.getElementById("houses").style.display = "block";
    document.getElementById("spells").style.display = "none";
    document.getElementById("gallery").style.display = "none";
}

function showSpells() {
    document.getElementById("home").style.display = "none";
    document.getElementById("houses").style.display = "none";
    document.getElementById("spells").style.display = "block";
    document.getElementById("gallery").style.display = "none";
}

function showGallery() {
    document.getElementById("home").style.display = "none";
    document.getElementById("houses").style.display = "none";
    document.getElementById("spells").style.display = "none";
    document.getElementById("gallery").style.display = "block";
}

function chooseHouse(house) {
    document.getElementById("house-choice").style.display = "block";
    document.getElementById("house-name").innerText = house;
}