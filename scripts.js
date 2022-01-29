const button = document.getElementById("button");
const sum = document.getElementById("sum");
const workerName = document.getElementById("name");
const workerPosition = document.getElementById("position");
const character_count = document.getElementById("character_count");

function setName() {
    sum.innerHTML = `${workerName.value} · ${workerPosition.value}`;
}

function setCharacterCount() {
    character_count.innerHTML = workerName.value.length + workerPosition.value.length;
}

button.onclick = () => window.print();

workerName.onkeyup = () => {
    setName();
    setCharacterCount();
};

workerPosition.onkeyup = () => {
    setName();
    setCharacterCount();
};