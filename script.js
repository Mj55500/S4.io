function showInfo(text) {
    const infoBox = document.getElementById("actor-info");
    infoBox.textContent = text;
}

function hideInfo() {
    const infoBox = document.getElementById("actor-info");
    infoBox.textContent = "Наведите курсор на фото, чтобы увидеть описание.";
}